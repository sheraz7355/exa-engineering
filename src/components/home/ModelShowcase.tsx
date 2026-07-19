// Home — interactive Three.js 3D through-truss bridge showcase.
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Sheet } from "@/components/ui/Sheet";
import { CountUp } from "@/components/ui/CountUp";
import { modelStats } from "@/lib/content";

export function ModelShowcase() {
  const modelRef = useRef<HTMLCanvasElement>(null);
  const bgRef = useRef<HTMLCanvasElement>(null);

  // Mutable interaction state shared between the effect and the buttons.
  const autoRotateRef = useRef(true);
  const loadVisibleRef = useRef<(visible: boolean) => void>(() => {});

  const [rotationPaused, setRotationPaused] = useState(false);
  const [loadView, setLoadView] = useState(false);
  const [status, setStatus] = useState("MODEL EXA—0142 · LIVE RENDER");

  // ---- main truss-bridge scene ----
  useEffect(() => {
    const canvas = modelRef.current;
    if (!canvas) return;
    const wrap = canvas.parentElement;
    if (!wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 16 / 11, 0.1, 200);
    camera.position.set(26, 15, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function size() {
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
    }

    // ---- Procedural through-truss bridge geometry ----
    const group = new THREE.Group();
    scene.add(group);

    const bays = 8,
      bayLen = 4,
      height = 5,
      halfW = 3;
    const nodes: THREE.Vector3[] = [];
    const nodeIndex: Record<string, number> = {};
    function node(x: number, y: number, z: number): number {
      const key = `${x},${y},${z}`;
      if (nodeIndex[key] === undefined) {
        nodeIndex[key] = nodes.length;
        nodes.push(new THREE.Vector3(x, y, z));
      }
      return nodeIndex[key];
    }
    const members: Array<[number | undefined, number | undefined]> = [];
    function member(a: number | undefined, b: number | undefined) {
      members.push([a, b]);
    }

    const x0 = -(bays * bayLen) / 2;
    for (let s = 0; s <= bays; s++) {
      const x = x0 + s * bayLen;
      // bottom chord nodes (both sides)
      node(x, 0, -halfW);
      node(x, 0, halfW);
      // top chord nodes only between end portals
      if (s > 0 && s < bays) {
        node(x, height, -halfW);
        node(x, height, halfW);
      }
    }
    const B = (s: number, side: number): number | undefined =>
      nodeIndex[`${x0 + s * bayLen},0,${side * halfW}`];
    const T = (s: number, side: number): number | undefined =>
      nodeIndex[`${x0 + s * bayLen},${height},${side * halfW}`];

    for (let s = 0; s < bays; s++) {
      for (const side of [-1, 1]) {
        member(B(s, side), B(s + 1, side)); // bottom chord
        if (s > 0 && s < bays - 1) member(T(s, side), T(s + 1, side)); // top chord
        // verticals
        if (s > 0) member(B(s, side), T(s, side));
        // diagonals (web)
        if (s > 0 && s < bays)
          member(B(s, side), (s < bays - 1 ? T(s + 1, side) : undefined) ?? B(s + 1, side));
        if (s > 0) member(T(s, side) ?? B(s, side), B(s + 1, side));
      }
      // floor beams (bottom laterals)
      member(B(s, -1), B(s, 1));
      // top laterals
      if (s > 0 && s < bays - 1) member(T(s, -1), T(s, 1));
    }
    member(B(bays, -1), B(bays, 1));
    // end portals (incline top chord to bottom at the ends)
    for (const side of [-1, 1]) {
      member(B(0, side), T(1, side));
      member(B(bays, side), T(bays - 1, side));
    }
    // portal top bracing
    member(T(1, -1), T(1, 1));
    member(T(bays - 1, -1), T(bays - 1, 1));

    // deck plane
    const deckGeo = new THREE.PlaneGeometry(bays * bayLen, halfW * 2);
    const deckMat = new THREE.MeshBasicMaterial({
      color: 0x1b3a5c,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });
    const deck = new THREE.Mesh(deckGeo, deckMat);
    deck.rotation.x = -Math.PI / 2;
    deck.position.y = 0.02;
    group.add(deck);

    // members as line segments
    const linePos: number[] = [];
    for (const [a, b] of members) {
      if (a === undefined || b === undefined) continue;
      linePos.push(nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z);
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0xe7e8e1 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // secondary blueprint-tinted overlay lines for depth
    const lineGeo2 = lineGeo.clone();
    const lineMat2 = new THREE.LineBasicMaterial({
      color: 0x6f86a3,
      transparent: true,
      opacity: 0.5,
    });
    const lines2 = new THREE.LineSegments(lineGeo2, lineMat2);
    lines2.scale.setScalar(1.001);
    group.add(lines2);

    // nodes as instanced spheres
    const sphereGeo = new THREE.SphereGeometry(0.22, 10, 10);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xff4d1c });
    const inst = new THREE.InstancedMesh(sphereGeo, sphereMat, nodes.length);
    const dummy = new THREE.Object3D();
    nodes.forEach((n, i) => {
      dummy.position.copy(n);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);

    // load-view arrows (hidden by default)
    const loadGroup = new THREE.Group();
    loadGroup.visible = false;
    for (let s = 1; s < bays; s++) {
      for (const side of [-1, 1]) {
        const x = x0 + s * bayLen;
        const dir = new THREE.Vector3(0, -1, 0);
        const origin = new THREE.Vector3(x, height + 2.2, side * halfW);
        const arrow = new THREE.ArrowHelper(dir, origin, 2.0, 0xff4d1c, 0.7, 0.45);
        loadGroup.add(arrow);
      }
    }
    group.add(loadGroup);

    group.position.y = -1.5;

    // expose load-view toggle to the button handler
    loadVisibleRef.current = (visible: boolean) => {
      loadGroup.visible = visible;
    };

    // ---- interaction: auto-rotate + drag orbit ----
    let theta = 0.7,
      phi = 0.62;
    let radius = 42;
    let dragging = false,
      lastX = 0,
      lastY = 0;

    function applyCamera() {
      camera.position.x = radius * Math.sin(phi) * Math.cos(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
      camera.lookAt(0, 0, 0);
    }

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerUp = () => {
      dragging = false;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      theta -= (e.clientX - lastX) * 0.006;
      phi = Math.min(Math.max(phi - (e.clientY - lastY) * 0.006, 0.25), 1.35);
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      radius = Math.min(Math.max(radius + e.deltaY * 0.03, 26), 70);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    let raf = 0;
    function animate() {
      if (autoRotateRef.current && !dragging && !reduce) theta += 0.0022;
      applyCamera();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }

    size();
    window.addEventListener("resize", size);
    applyCamera();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("wheel", onWheel);
      loadVisibleRef.current = () => {};
      loadGroup.traverse((obj) => {
        if (obj instanceof THREE.ArrowHelper) obj.dispose();
      });
      deckGeo.dispose();
      deckMat.dispose();
      lineGeo.dispose();
      lineGeo2.dispose();
      lineMat.dispose();
      lineMat2.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      inst.dispose();
      renderer.dispose();
    };
  }, []);

  // ---- subtle rotating wireframe icosahedron background ----
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene2 = new THREE.Scene();
    const cam2 = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
    cam2.position.z = 30;
    const rend2 = new THREE.WebGLRenderer({ canvas: bg, antialias: true, alpha: true });
    rend2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function size2() {
      if (!bg) return;
      const r = bg.getBoundingClientRect();
      rend2.setSize(r.width, r.height, false);
      cam2.aspect = r.width / r.height;
      cam2.updateProjectionMatrix();
    }

    const geo = new THREE.IcosahedronGeometry(14, 1);
    const wire = new THREE.WireframeGeometry(geo);
    const mat = new THREE.LineBasicMaterial({ color: 0x2b4a68, transparent: true, opacity: 0.35 });
    const mesh = new THREE.LineSegments(wire, mat);
    mesh.position.set(9, 0, -6);
    scene2.add(mesh);

    let raf = 0;
    function loop2() {
      if (!reduce) {
        mesh.rotation.y += 0.0015;
        mesh.rotation.x += 0.0008;
      }
      rend2.render(scene2, cam2);
      raf = requestAnimationFrame(loop2);
    }

    size2();
    window.addEventListener("resize", size2);
    loop2();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size2);
      geo.dispose();
      wire.dispose();
      mat.dispose();
      rend2.dispose();
    };
  }, []);

  function toggleRotation() {
    const next = !autoRotateRef.current;
    autoRotateRef.current = next;
    setRotationPaused(!next);
  }

  function toggleLoadView() {
    const next = !loadView;
    setLoadView(next);
    loadVisibleRef.current(next);
    setStatus(next ? "MODEL EXA—0142 · LOAD CASE LC-2" : "MODEL EXA—0142 · LIVE RENDER");
  }

  return (
    <section
      id="model"
      className="relative overflow-hidden border-b border-black/40 bg-ink text-white grid-field-dark"
    >
      <canvas ref={bgRef} className="absolute inset-0 h-full w-full opacity-100" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        {/* LEFT */}
        <div className="z-10 lg:col-span-4">
          <SectionLabel tone="signal">Interactive Model</SectionLabel>
          <h2 className="mt-2 mb-6 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
            Inspect the structure.
          </h2>
          <p className="mb-8 max-w-md leading-relaxed text-white/70">
            A through-truss deck bridge, rendered live from the same geometry our analysis engine
            solves against. Drag to orbit, or let it turn. Every node is a calculated connection
            point.
          </p>
          <div className="mb-8 grid max-w-md grid-cols-2 gap-x-4 gap-y-6">
            {modelStats.map((stat) => (
              <div key={stat.label} className="border-t border-white/15 pt-4">
                <div className="font-display text-xl font-semibold">
                  {typeof stat.value === "number" ? (
                    <CountUp value={stat.value} suffix={stat.suffix ?? ""} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={toggleRotation}
              className="border border-white/30 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-ink"
            >
              {rotationPaused ? "Resume Rotation" : "Pause Rotation"}
            </button>
            <button
              type="button"
              onClick={toggleLoadView}
              className="border border-white/30 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-ink"
            >
              {loadView ? "Hide Load View" : "Toggle Load View"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="z-10 lg:col-span-8">
          <Sheet light className="relative">
            <div className="aspect-[16/11] border border-white/15 bg-black/20">
              <canvas ref={modelRef} className="h-full w-full" />
            </div>
            <div className="mt-3 flex justify-between px-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60">
              <span>{status}</span>
              <span>DRAG TO ORBIT</span>
            </div>
          </Sheet>
        </div>
      </div>
    </section>
  );
}

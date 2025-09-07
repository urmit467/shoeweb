import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import butterfly from "./images/vutterfly.png";

// Default butterfly image (you can replace this with your own URL or import)
const DEFAULT_BUTTERFLY =
  "https://images.unsplash.com/photo-1500048993953-dc5f0f6f6b8a?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a2b8f0f2d3f6d5d1b9c6e3b7c8f1a2b";

// Utility: clamp a value between min and max
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// -- Component --
export default function Cursorfollow({
  src = butterfly,
  size = 96, // px width & height of the butterfly
  followSpring = { stiffness: 200, damping: 25 },
  floatAmplitude = 8, // px vertical floating amplitude
  floatSpeed = 2, // cycles per second
  visible = true,
}) {
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [viewport, setViewport] = useState({ w: window.innerWidth, h: window.innerHeight });
  const imgRef = useRef(null);
  const rafRef = useRef(null);

  // Track mouse position
  useEffect(() => {
    function onMove(e) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Keep track of viewport size (for clamp)
  useEffect(() => {
    function onResize() {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Measured size of the image (fallback to `size` prop)
  const measured = {
    w: imgRef.current?.naturalWidth ? (imgRef.current.naturalWidth / imgRef.current.naturalHeight) * size : size,
    h: imgRef.current?.naturalHeight ? size : size,
  };

  // Compute target position and keep inside viewport
  const target = {
    x: clamp(mouse.x - measured.w / 2, 8, Math.max(8, viewport.w - measured.w - 8)),
    y: clamp(mouse.y - measured.h / 2, 8, Math.max(8, viewport.h - measured.h - 8)),
  };

  // Float animation: produce a small vertical offset that oscillates with time
  // We generate a value in render using time from RAF so that float feels organic
  const [floatOffset, setFloatOffset] = useState(0);
  useEffect(() => {
    let start = performance.now();
    function tick(now) {
      const t = (now - start) / 1000; // seconds
      // simple sinusoidal float
      const offset = Math.sin(t * Math.PI * 2 * floatSpeed) * floatAmplitude;
      setFloatOffset(offset);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [floatAmplitude, floatSpeed]);

  // Determine rotation so butterfly faces cursor direction slightly
  // We'll compute angle between current position (approximated by target) and previous position
  const previous = useRef(target);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const dx = target.x - previous.current.x;
    const dy = target.y - previous.current.y;
    const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    // small smoothing to avoid jitter
    setAngle((a) => a * 0.85 + newAngle * 0.15);
    previous.current = target;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.x, target.y]);

  // framer-motion variants
  const variants = {
    idle: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial="hidden"
          animate={"idle"}
          exit="hidden"
          variants={variants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
            willChange: "transform",
          }}
        >
          {/* The motion wrapper moves to the target x,y using a spring for natural following */}
          <motion.div
            animate={{ x: target.x, y: target.y + floatOffset, rotate: angle }}
            transition={{ type: "spring", ...followSpring }}
            style={{ width: size, height: size }}
          >
            {/* Butterfly image with gentle wing-flap using CSS animation */}
            <img
              ref={imgRef}
              src={src}
              alt="butterfly"
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                transformOrigin: "50% 50%",
                userSelect: "none",
                // a little drop shadow so it feels above the page
                filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.2))",
                // CSS animation name is defined below through a small inline <style>
              }}
              className="butterfly-flap"
            />
          </motion.div>

          {/* Inline CSS for wing flap animation - small and configurable */}
          <style>{`
            .butterfly-flap {
              animation: flap 0.9s ease-in-out infinite;
            }
            @keyframes flap {
              0% { transform: translateY(0) rotate(0deg) scale(1); }
              25% { transform: translateY(-2px) rotate(-1deg) scale(1.01); }
              50% { transform: translateY(0) rotate(0deg) scale(1); }
              75% { transform: translateY(2px) rotate(1deg) scale(0.99); }
              100% { transform: translateY(0) rotate(0deg) scale(1); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

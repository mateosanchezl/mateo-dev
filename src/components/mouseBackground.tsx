"use client";

import React, { useState, useEffect } from "react";

function MouseBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)",
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backdropFilter: "blur(12vmax)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

export default MouseBackground;

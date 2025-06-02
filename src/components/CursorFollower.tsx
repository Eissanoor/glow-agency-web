import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 5, y: 5 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 26,
        height: 26,
        // background: "rgba(0,0,0,0.2)",
        border: "4px solid #FF7E29",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorFollower;
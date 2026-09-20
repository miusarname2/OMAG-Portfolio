"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: isDark
          ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
          : `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.03), transparent 40%)`,
      }}
    />
  );
}

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-magnetic')
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-multiply",
          isHovering ? "scale-[3] opacity-30" : "scale-100 opacity-100"
        )}
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-10 h-10 border border-primary/40 rounded-full pointer-events-none z-[99]",
          isHovering ? "scale-150 opacity-0" : "scale-100 opacity-100"
        )}
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
    </>
  );
}

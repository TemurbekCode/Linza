import { useState, useEffect } from "react";
import "./CustomCursor.scss";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isGrown, setIsGrown] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // hover qilinganda kattalashadigan elementlar
    const hoverElements = document.querySelectorAll(
      "a, button, .card, input, textarea, select"
    );

    function grow() {
      setIsGrown(true);
    }

    function shrink() {
      setIsGrown(false);
    }

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      className={isGrown ? "cursor grow" : "cursor"}
      style={{ left: position.x + "px", top: position.y + "px" }}
    ></div>
  );
}

export default CustomCursor;

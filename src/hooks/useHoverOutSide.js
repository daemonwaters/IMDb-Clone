import { useEffect, useRef } from "react";

function useHoverOutSide(handler) {
  const ref = useRef(null);
  const handleMouseOver = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);
  
  return { ref };
}

export { useHoverOutSide };

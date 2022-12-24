import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      if (dom) {
        dom && dom.removeEventListener("mouseover", handleMouseOver);
        dom && dom.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}

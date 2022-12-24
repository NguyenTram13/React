import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blogs = () => {
  const { contentRef } = useLinkNewTab();
  const abc = useRef();

  const { hovered, nodeRef } = useHover();
  useEffect(() => {
    console.log(abc.current);
  });
  return (
    <div className="entry-content" ref={contentRef}>
      <p ref={abc} className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae
        qui beatae! Quas ipsam est nam ut dolor unde ipsa sequi voluptate,
        expedita maxime corrupti repudiandae esse quam aspernatur blanditiis.
        <a
          href="http://google.com"
          className={`underline ${hovered ? "text-green-400" : " "}`}
          ref={nodeRef}
        >
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae
        qui beatae! Quas ipsam est nam ut dolor unde ipsa sequi voluptate,
        expedita maxime corrupti repudiandae esse quam aspernatur blanditiis.
        <a href="http://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae
        qui beatae! Quas ipsam est nam ut dolor unde ipsa sequi voluptate,
        expedita maxime corrupti repudiandae esse quam aspernatur blanditiis.
        <a href="http://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae
        qui beatae! Quas ipsam est nam ut dolor unde ipsa sequi voluptate,
        expedita maxime corrupti repudiandae esse quam aspernatur blanditiis.
        <a href="http://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blogs;

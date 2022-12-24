import React from "react";

const SlideBarMenu = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`w-[300px] bg-gray-500 shadow-md fixed top-0 left-0 bottom-0 z-10 transition-all 
      ${props.show ? "" : "-translate-x-full"}`}
    ></div>
  );
});

export default SlideBarMenu;

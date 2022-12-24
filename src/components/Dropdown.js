// import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef: dropdownRef1 } = useClickOutSide();
  return (
    <div ref={dropdownRef1} className="relative w-full  max-w-[400px]">
      <div
        onClick={() => setShow(!show)}
        className=" p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
      >
        Selected
      </div>
      {show && (
        <div className=" p-5 absolute  top-full left-0 w-full  border border-gray-200 rounded-lg bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Javascript</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

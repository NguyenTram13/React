import React, { useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  // const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (even) => {
    console.log(even.target.value);
    setTextareaHeight("auto");
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);

    setText(even.target.value);
  };
  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="transition-all overflow-hidden leading-normal  w-full focus:border-green-300 max-w-[400px] p-5 rounded-lg border border-gray-300 resize-none"
        // style="height:auto;"
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        placeholder="Please enter your content..."
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;

import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const InputForm = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [conuntry, setCountry] = useState("");

  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };
  // const handleTextareachange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleSelectchange = (event) => {
  //   setCountry(event.target.value);
  // };
  const { values, handelChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);
  return (
    <div className="p-5 ">
      {/* {fullname} */}
      <div className="flex gap-x-3" autoComplete="off">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name..."
          onChange={useHandleChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email..."
          onChange={useHandleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={useHandleChange} /> */}
        <button type="submit" className=""></button>
      </div>
      {/* {message} */}
      {/* <textarea
        name="message"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message..."
        onChange={handleTextareachange}
      ></textarea>
      {conuntry}
      <select name="country" onChange={handleSelectchange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">japan</option>
      </select> */}
    </div>
  );
};

export default InputForm;

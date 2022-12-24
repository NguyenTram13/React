// state là những thông tin thuộc về component
/*
  - use state
  - stateless function component: component không sd state
  - statefull function component: component có sd state
  - hook : 
    + viết trên cùng 
    + k viết trong if/fc
    + chỉ sử dụng trong fc component
*/
// import React from "react";

// const toggle = () => {
//   return <div classname="toggle"></div>;
// };
// const toggle2 = () => {
//   return <div classname="toggle"></div>;
// };

// import React, { useState } from "react";
import React, { useState } from "react";
import "./ToggleStyles.css";
const Toggle = () => {
  // 1. enabling state: useState(intialState value)
  // 2. initialize state: usestate(false)
  // 3. reading state:
  // 4. update state:
  // const arr = useState(0);

  // console.log(arr);
  // console.log(arr[0]);
  // console.log(arr[1]);
  // const array = [1, 2];
  // console.log(array[0], array[1]);

  // const [a,b ]= [1,2];
  // console.log(a,b);

  // initialize value: boolean(true, false), number(1,2,3,4), string("banhsus"), undefine, null, [1,2,3,4], {title: "Frontend Developer"}
  const [on, setOn] = useState(false);
  console.log(on, setOn);

  // Đặt on, setOn: vì để nhất quán
  // const [title , set title]
  // [isactive, setIsactive]
  // handlelinkEvent
  // <div className="toggle" onclick="toggle"></div> : onClick
  // state changes -> re-render

  const handleToggle = () => {
    // setOn(callback )=> setOn(prevState => !prevState)
    setOn((on) => {
      return !on;
    });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* {on ? "ON" : "OFF"} */}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          on
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          off
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;

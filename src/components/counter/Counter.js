import React, { useEffect, useState } from "react";

const Counter = () => {
  //stale state
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "Nguyen",
    lastName: "Tram",
  });
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  useEffect(() => {
    console.log("form input");
  }, [info]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white  rounded p-2"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

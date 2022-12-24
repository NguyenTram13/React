import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div className="w-full mx-[auto] text-center">
      <h3>Timer: {count}s</h3>
      <div>
        <button
          className="p-3 mx-3 bg-black text-white rounded "
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="p-3 mx-3 bg-black text-white rounded "
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

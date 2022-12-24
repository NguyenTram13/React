import React from "react";
// import "./Button.scss";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${style.button} ${
          props.secondary ? style.buttonSecondary : ""
        } `}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;

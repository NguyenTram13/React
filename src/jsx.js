import React from "react";

const jsx = () => {
  const element = <div id="root">Hello World</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello world");

  const Element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "Hello"),
    ],
  });

  return <div></div>;
};

export default jsx;

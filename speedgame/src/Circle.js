import React from "react";

const Circle = (props) => {
  return (
    <div
      className="circle"
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      <p>{props.id}</p>
    </div>
  );
};

export default Circle;

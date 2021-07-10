import React from "react";

const InputComp = (props) => {
  return (
    <div>
      <h3>{props.label}</h3>
      <input type = {props.type}>{props.defVal}</input>
    </div>
  );
};

export default InputComp;
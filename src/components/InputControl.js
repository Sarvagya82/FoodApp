import React from "react";

function InputControl(props) {
  return (
    <div className="flex flex-col space-y-2">
      {props.label && <label className="font-bold text-base text-gray-600">{props.label}</label>}
      <input
        type="text"
        {...props}
        className="rounded border border-gray-300 outline-none py-2 px-3 text-black"
      />
    </div>
  );
}

export default InputControl;

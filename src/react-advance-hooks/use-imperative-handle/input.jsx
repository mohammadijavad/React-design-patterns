import React from "react";

function Input() {
  return (
    <div>
      <input
        placeholder="text"
        className={`border border-gray-500 focus:outline-red-400 px-4 p-1 rounded-lg`}
      />
    </div>
  );
}

export default Input;

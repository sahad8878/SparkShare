import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      className="bg-[#6d6875] text-white font-bold py-1 px-3 my-3 rounded hover:bg-[#8f8998]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

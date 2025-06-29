import React from "react";


function Button({ variation, onClick, children }) {
  const className = variation === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
import React from "react";


function Button({ variation, onClick, children }) {
  const baseClass = 'button'
  const classVariation = variation === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button className={`${baseClass} ${classVariation}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
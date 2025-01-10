import React from "react";
import "./SkipNavigation.css";

const SkipNavigation = ({ targetId }) => {
  return (
    <a
      href={`#${targetId}`}
      className='skip-link'
      aria-label={`Skip to ${targetId}`}>
      {targetId}
    </a>
  );
};

export default SkipNavigation;

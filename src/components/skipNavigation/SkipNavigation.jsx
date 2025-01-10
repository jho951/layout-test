import React from "react";
import "./SkipNavigation.css";

export default function SkipNavigation({ targetId }) {
  return (
    <a
      className='skip-link'
      href={`#${targetId}`}
      aria-label={`Skip to ${targetId}`}>
      {targetId}
    </a>
  );
}

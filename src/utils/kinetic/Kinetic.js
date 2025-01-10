import React from "react";
import "./Kinetic.css";

export default function Kinetic({ text }) {
  const animationDelay = 0.1;

  return (
    <>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className='kinetic-letter'
          style={{ animationDelay: `${index * animationDelay}s` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </>
  );
}

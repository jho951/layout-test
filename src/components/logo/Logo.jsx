import React from "react";
import "./Logo.css";

const Logo = ({ logo, size }) => {
  return (
    <figure className='Logo-wrap'>
      <img
        src={logo}
        className='Logo'
        alt='logo'
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </figure>
  );
};

export default Logo;

import React from "react";
import "./Logo.css";

const Logo = ({ logo }) => {
  return (
    <figure className='Logo-wrap'>
      <img src={logo} className='Logo' alt='logo' />
    </figure>
  );
};

export default Logo;

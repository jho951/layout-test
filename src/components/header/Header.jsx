import React from "react";
import MHeader from "./mHeader/MHeader";
import "./Header.css";

const Header = () => {
  return (
    <header id='header' className='hide-tablet'>
      <MHeader />
    </header>
  );
};

export default Header;

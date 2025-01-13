import React from "react";
import MobileGnb from "./mobileGnb/MobileGnb";
import "./Drawer.css";

const Drawer = ({ isOpen }) => {
  return (
    <nav class={`drawer-wrap ${isOpen}`}>
      <MobileGnb />
    </nav>
  );
};

export default Drawer;

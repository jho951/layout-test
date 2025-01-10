import React, { useEffect } from "react";
import "./Drawer.css";
import { Link } from "react-router-dom";
import { GNB } from "../../constants/GNB";
import { SIGN } from "../../constants/SIGN";

const Drawer = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav class={`drawer-wrap ${isOpen}`}>
      <ul>
        {GNB &&
          GNB.length > 0 &&
          GNB.map((i) => (
            <li id={i.id}>
              <Link to={i.href} aria-current='page'>
                <h2>{i.title}</h2>
              </Link>
            </li>
          ))}
      </ul>
      <section className='drawer-sign'>
        {SIGN.map((i) => (
          <Link to={i.href} key={i.id}>
            {i.title}
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default Drawer;

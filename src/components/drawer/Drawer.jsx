import React from "react";
import "./Drawer.css";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen }) => {
  const Gnb = [{ id: 0, title: "widthunit", href: "/widthunit" }];
  return (
    <nav class={`drawer-wrap ${isOpen}`}>
      <ul className={`m-gnb-wrap ${isOpen}`}>
        {Gnb &&
          Gnb.length > 0 &&
          Gnb.map((i) => (
            <li id={i.id}>
              <Link to={i.href} className='m-gnb-list' aria-current='page'>
                <h2>{i.title}</h2>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Drawer;

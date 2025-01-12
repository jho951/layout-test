import React from "react";
import { Link } from "react-router-dom";
import { GNB } from "../../../constants/GNB";
import { SIGN } from "../../../constants/SIGN";

const MobileGnb = () => {
  return (
    <article>
      <ul>
        {GNB &&
          GNB.map((i) => (
            <li id={i.id}>
              <Link to={i.href} aria-current='page'>
                <h2>{i.title}</h2>
              </Link>
            </li>
          ))}
      </ul>
      <section className='drawer-login'>
        <Link to={SIGN[0].href}>{SIGN[0].title}</Link>
      </section>
    </article>
  );
};

export default MobileGnb;

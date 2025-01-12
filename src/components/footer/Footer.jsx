import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Kinetic from "../../utils/kinetic/Kinetic";
import Icon from "../../utils/icon/Icon";

import "./Footer.css";

const COLOR = "#ffffff";

export default function Footer() {
  return (
    <footer id='footer'>
      <section className='footer-sub'>
        <h4>
          <Kinetic text='Visit to my posts!' />
        </h4>
        <Link
          className='sub-btn'
          to='https://develop-enchantment.tistory.com/ '
          target='_blank'>
          SUBSCRIBE
        </Link>
      </section>
      <Logo size='70' color={COLOR} />
      <Link to='https://www.github.com/jho951' target='_blank'>
        <Icon icon='gitHub' color={COLOR} />
      </Link>
      <p className='copyright'>©2024, JH All Rights Reserved.</p>
    </footer>
  );
}

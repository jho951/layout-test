import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo/Logo";
import Drawer from "../../drawer/Drawer";
import "./MHeader.css";

export default function MHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClickDrawer = (e) => {
    e.preventDefault();
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <div class='mobile-header-wrap'>
        <Link to='/' aria-current='page'>
          <Logo logo={process.env.PUBLIC_URL + "/logo.svg"} size='50' />
          <h1 class='logo-title hide'>CSS Layout</h1>
        </Link>
        <section class={`drawer ${openDrawer}`} onClick={onClickDrawer}>
          <Link
            class={`drawer-btn ${openDrawer}`}
            to='#'
            aria-current={openDrawer}>
            <Icon />
          </Link>
        </section>
      </div>
      <Drawer isOpen={openDrawer} />
    </React.Fragment>
  );
}

function Icon() {
  const color = "#ffffff";
  const size = "16";

  return (
    <span class='plus'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8.59567 6.09631V7.09631H12.5958V6.09631H8.59567ZM7.09575 8.59612L6.09575 8.59612L6.09575 12.5962L7.09575 12.5962L7.09575 8.59612ZM7.09575 0.596203L7.09575 4.59612L6.09575 4.59612L6.09575 0.596203L7.09575 0.596203ZM4.59567 6.09631L0.595756 6.09631L0.595756 7.09631L4.59567 7.09631L4.59567 6.09631Z'
          fill={color}></path>
      </svg>
    </span>
  );
}

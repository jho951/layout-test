import React from "react";
import Drawer from "../../drawer/Drawer";
import Logo from "../../logo/Logo";
import { useChange } from "../../../utils/onChange";
import { DisableBodyScroll } from "../../../utils/disableScroll";
import "./MHeader.css";

const COLOR = "#FFFFFF";
const MENU_SIZE = "14";
const LOGO_SIZE = "35";

export default function MHeader() {
  const [status, setStatus] = useChange(false);

  return (
    <React.Fragment>
      <DisableBodyScroll isOpen={status} />
      <article class='mobile-header-wrap hide-tablet'>
        <Logo size={LOGO_SIZE} color={COLOR} />
        <button
          class={`menu-btn ${status}`}
          onClick={setStatus}
          aria-current={status}>
          <Menu isOpen={status} />
        </button>
      </article>
      <Drawer isOpen={status} />
    </React.Fragment>
  );
}

function Menu({ isOpen }) {
  return (
    <figure class={`menu-btn-wrap ${isOpen}`}>
      <span class='plus'>
        <svg
          width={MENU_SIZE}
          height={MENU_SIZE}
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8.59567 6.09631V7.09631H12.5958V6.09631H8.59567ZM7.09575 8.59612L6.09575 8.59612L6.09575 12.5962L7.09575 12.5962L7.09575 8.59612ZM7.09575 0.596203L7.09575 4.59612L6.09575 4.59612L6.09575 0.596203L7.09575 0.596203ZM4.59567 6.09631L0.595756 6.09631L0.595756 7.09631L4.59567 7.09631L4.59567 6.09631Z'
            fill={COLOR}></path>
        </svg>
      </span>
    </figure>
  );
}

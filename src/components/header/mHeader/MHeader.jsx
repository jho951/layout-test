import React, { useRef, useState } from "react";
import Button from "../../button/Button";
import Drawer from "../../drawer/Drawer";
import Logo from "../../logo/Logo";
import DrawerButton from "../../drawer/drawerButton/DrawerButton";
import { useChange } from "../../../utils/onChange";
import { DisableBodyScroll } from "../../../utils/disableScroll";
import "./MHeader.css";

const COLOR = "#FFFFFF";
const LOGO_SIZE = "35";

export default function MHeader() {
  const [status, setStatus] = useChange(false);
  const [type, setType] = useState("");
  const buttonRef = useRef();

  return (
    <React.Fragment>
      <DisableBodyScroll isOpen={status} />
      <article className='mobile-header-wrap hide-tablet'>
        <Logo size={LOGO_SIZE} color={COLOR} />
        <section className='mobile-header-wrap gnb-icon'>
          <Button
            type='icon'
            icon='cart'
            size={LOGO_SIZE}
            color={COLOR}
            ref={buttonRef}
          />
          <DrawerButton status={status} onClick={setStatus} icon='plus' />
        </section>
      </article>
      <Drawer isOpen={status} />
    </React.Fragment>
  );
}

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Icon from "../../utils/icon/Icon";
import "./Button.css";

const IconButton = forwardRef(({ type, ...props }, ref) => {
  const buttonRef = useRef(null);
  useImperativeHandle(ref, () => ({
    click: () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    },
    disable: () => {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    },
    enable: () => {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    },
    updateText: (newText) => {
      if (buttonRef.current) {
        buttonRef.current.innerText = newText;
      }
    },
  }));

  return (
    <button className='button-wrap icon' ref={buttonRef}>
      <Icon icon={props.icon} color={props.color} size={props.size} />
    </button>
  );
});

export default IconButton;

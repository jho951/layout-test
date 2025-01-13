import React from "react";
import "./DrawerButton.css";
import Icon from "../../../utils/icon/Icon";

const COLOR = "#FFFFFF";

export default function DrawerButton({ status, onClick, icon }) {
  return (
    <button
      className={`drawer-btn ${status} ${icon}`}
      onClick={onClick}
      aria-current={status}>
      <figure className={`drawer-btn-wrap ${status} ${icon}`}>
        <Icon icon={icon} color={COLOR} size='14' />
      </figure>
    </button>
  );
}

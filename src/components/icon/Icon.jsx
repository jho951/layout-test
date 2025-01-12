"use client";

import React from "react";

import { icons } from "@/utils/constants/icon";
import "./Icon.css";

/**
 * @param {*} icon : 아이콘 종류
 * @param {*} color : 아이콘 색
 * @param {*} width : 너비
 * @param {*} height : 높이
 */

const Icon = ({ icon, color, width, height }) => {
  const iconStyle = {
    display: "inline-block",
    "--icon": icons(icon, color),
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <span style={iconStyle}>
      <i className='svg' />
    </span>
  );
};

export default Icon;

import React from "react";
import { ICONS } from "../../constants/ICON";
import "./Icon.css";

const DEFAULT_COLOR = "002f80";
const DEFAULT_SIZE = 50;

const normalizeColor = (color) => {
  return color?.startsWith("#") ? color.slice(1) : color || DEFAULT_COLOR;
};

const Icon = ({ icon, color = DEFAULT_COLOR, size = DEFAULT_SIZE }) => {
  const normalizedColor = normalizeColor(color);
  const svgContent = ICONS[icon]?.(normalizedColor);

  if (svgContent) {
    const encodedSvg = encodeURIComponent(svgContent);
    const iconStyle = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
    };
    return <span className='icon-wrap' style={iconStyle} />;
  }

  return null;
};

export default Icon;

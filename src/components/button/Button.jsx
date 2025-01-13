import React, { forwardRef } from "react";
import IconButton from "./IconButton";

const Button = forwardRef(({ type, ...props }, ref) => {
  switch (type) {
    case "icon":
      return <IconButton ref={ref} {...props} />;
    default:
      return <button ref={ref} {...props} />;
  }
});

export default Button;

import React, { forwardRef } from "react";
import { TextInput } from "./TextInput";
import { PasswordInput } from "./PasswordInput";
import "./Input.css";

const Input = forwardRef(({ type, ...props }, ref) => {
  switch (type) {
    case "text":
      return <TextInput ref={ref} {...props} />;
    case "password":
      return <PasswordInput ref={ref} {...props} />;
    default:
      return <input ref={ref} {...props} />;
  }
});

export default Input;

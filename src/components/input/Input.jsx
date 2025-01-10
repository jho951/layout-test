import React from "react";
import { TextInput } from "./TextInput";

export default function Input({ type }) {
  // 구조 분해 할당
  switch (type) {
    case "text": {
      return <TextInput />;
    }
    default:
      return <input />;
  }
}

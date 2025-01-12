import React, { useRef, useState } from "react";
import Input from "../../components/input/Input";

export default function Login() {
  const loginRef = useRef([]);
  const [body, setBody] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChangeInput = (name, e) => {
    setBody((prev) => ({ ...prev, [name]: e }));
  };

  return (
    <div>
      <Input
        name='id'
        type='text'
        placeholder='아이디'
        fullWidth
        value={body?.id}
        onChange={onChangeInput}
        disabled={isLoading}
        ref={loginRef}
      />
      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        fullWidth
        value={body?.password}
        onChange={onChangeInput}
        disabled={isLoading}
        ref={loginRef}
      />
    </div>
  );
}

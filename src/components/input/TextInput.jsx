import React from "react";
import "./Input.css";

export function TextInput() {
  return (
    <div className='input-wrap'>
      <input />
    </div>
  );
}

// import React, {
//   useState,
//   forwardRef,
//   useRef,
//   useImperativeHandle,
// } from "react";

// import "./Input.css";

// /**
//  * @param {*} id : label 태그를 위한 id 입니다.
//  * @param {*} name : input 이름
//  * @param {*} type : input 타입 변경
//  * @param {*} placeholder : placeholder
//  * @param {*} value : input 값
//  * @param {*} onChange : input 값 변경
//  * @param {*} maxLength : 최대 글자 수
//  * @param {*} size : input 글자 크기
//  * @param {*} autoComplete : 자동 완성기능
//  * @param {*} readOnly : 읽기 전용
//  * @param {*} disabled : input 비활성화
//  * @param {*} fullWidth : width : 100%
//  * @param {*} style : input 스타일 적용
//  * @param {*} ref : input ref
//  */

// const Input = forwardRef(
//   (
//     {
//       id,
//       name = "default",
//       type = "text",
//       placeholder = "",
//       value = "",
//       onChange,
//       maxLength,
//       size = 14,
//       autoComplete = false,
//       readOnly = false,
//       disabled = false,
//       fullWidth = false,
//       style,
//     },
//     ref
//   ) => {
//     const inputRef = useRef(null);
//     const [isFocus, setIsFocus] = useState("");

//     const onFocus = () => {
//       if (!readOnly) {
//         setIsFocus("primary");
//         inputRef.current.focus();
//       }
//     };

//     const onBlur = () => {
//       setIsFocus("");
//       inputRef.current.blur();
//     };

//     const clear = () => {
//       if (inputRef.current) {
//         onChange(name, "");
//       }
//     };

//     useImperativeHandle(ref, () => ({
//       clear,
//       onFocus,
//     }));

//     return (
//       <div
//         className={`wrap ${disabled ? `disabled` : ""} ${
//           isFocus && `isFocus`
//         } ${fullWidth && "fullWidth"}`}
//         style={style}>
//         <input
//           id={id}
//           className='input'
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(name, e.target.value)}
//           onFocus={onFocus}
//           onBlur={onBlur}
//           maxLength={maxLength}
//           readOnly={readOnly}
//           autoComplete={autoComplete}
//           size={size}
//           disabled={disabled}
//           aria-label={`${name}-input`}
//           aria-disabled={disabled}
//           ref={inputRef}
//         />
//       </div>
//     );
//   }
// );

// export default Input;

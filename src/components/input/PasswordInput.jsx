import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useMemo,
} from "react";
import Icon from "../../utils/icon/Icon";

/**
 * @param {*} id : label 태그를 위한 id 입니다.
 * @param {*} className : input className 입니다.
 * @param {*} name : input 이름
 * @param {*} type : input 타입 변경
 * @param {*} placeholder : placeholder
 * @param {*} value : input 값
 * @param {*} onChange : input 값 변경
 * @param {*} maxLength : 최대 글자 수
 * @param {*} size : input 글자 크기
 * @param {*} autoComplete : 자동 완성기능
 * @param {*} readOnly : 읽기 전용
 * @param {*} disabled : input 비활성화
 * @param {*} fullWidth : width : 100%
 * @param {*} style : input 스타일 적용
 * @param {*} ref : inputRef, buttonRef
 */

export const PasswordInput = forwardRef(({ ...props }, ref) => {
  const [isView, setIsView] = useState(false);
  const [isFocus, setIsFocus] = useState("");
  const inputRef = useRef(null);

  const isTypeChange = () => {
    setIsView((prevState) => !prevState);
  };

  const onFocus = () => {
    if (!props.readOnly) {
      setIsFocus("focus");
      inputRef.current.focus();
    }
  };

  const onBlur = () => {
    setIsFocus("");
    inputRef.current.blur();
  };

  const clear = () => {
    if (inputRef.current) {
      props.onChange(props.name, "");
      setIsFocus("focus");
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    onFocus,
    onBlur,
    clear,
  }));

  const inputClass = useMemo(() => {
    const classes = `input-wrap 
    ${props.disabled && "disabled"} 
    ${isFocus && "focus"}
    ${props.fullWidth && "fullWidth"}`;
    return classes;
  }, [props.disabled, isFocus, props.fullWidth]);

  return (
    <div className={inputClass}>
      <input
        type={isView ? "text" : "password"}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => props.onChange(props.name, e.target.value)}
        readOnly={props.disabled}
        aria-label={`${props.name}-input`}
        aria-disabled={props.disabled}
        ref={inputRef}
      />
      {!props.disabled && props.value && (
        <div className='input-btn-wrap'>
          <button
            className='input-close-btn'
            onClick={isTypeChange}
            aria-label='view-password-button'
            aria-disabled={props.disabled}>
            <Icon
              icon={isView ? "eyeVisibleOff" : "eyeVisible"}
              size='24'
              color='#666'
            />
            <span className='hide'>
              {isView ? "비밀번호 표시 안함" : "선택 안 됨,비밀번호 표시"}
            </span>
          </button>
          <button
            className='input-close-btn'
            onClick={clear}
            aria-label='close-button'
            aria-disabled={props.disabled}>
            <Icon icon='close' size='24' color='#BCBCBC' />
            <span className='hide'>삭제</span>
          </button>
        </div>
      )}
    </div>
  );
});

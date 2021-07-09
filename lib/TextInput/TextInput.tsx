import React, { InputHTMLAttributes } from "react";

import style from "../../assets/styles/lib/textInput/style.module.scss";

const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={`${style.input} ${props.className}`} />;
};

export default TextInput;

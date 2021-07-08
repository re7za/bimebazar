import React, { ButtonHTMLAttributes } from "react";

import style from "../../assets/styles/lib/button/style.module.scss";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`${style.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;

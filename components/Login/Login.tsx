import React, { useRef } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";

const Login = () => {
  const phoneNumberRef = useRef("");

  const handleInputChange = (e: any) => {
    phoneNumberRef.current = e.target.value;
    console.log(phoneNumberRef.current);
  };

  return (
    <div className={style.login}>
      <h3 className={style.header3}>ورود / ثبت‌نام</h3>
      <sub className={style.paragraph}>
        برای ورود یا ثبت نام لطفا شماره موبایل خود را وارد کنید
      </sub>
      <div className={style.input}>
        <div>شماره موبایل*</div>
        <TextInput
          type="text"
          name="phoneNumber"
          placeholder="مثلا 099300000000"
          onChange={handleInputChange}
        />
      </div>
      <Button className={style.submitBtn}>تایید شماره موبایل</Button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";

const LoginThirdPage = () => {
  const [confirmCode, setConfirmCode] = useState("");

  const handleInputChange = (e: any) => {
    setConfirmCode(e.target.value);
    console.log(confirmCode);
  };

  return (
    <div>
      <h3 className={style.header3}>تکمیل پروفایل</h3>
      <sub className={style.paragraph}>
        لطفا اطلاعات خواسته شده را تکمیل کنید.
      </sub>
      <div className={style.input}>
        <div>نام*</div>
        <TextInput
          type="text"
          name="username"
          autoComplete="off"
          placeholder="نام خانوادگی"
          onChange={handleInputChange}
        />
      </div>
      <Button disabled={!confirmCode} className={style.submitBtn}>
        تکمیل ثبت نام
      </Button>
    </div>
  );
};

export default LoginThirdPage;

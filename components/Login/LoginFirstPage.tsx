import React from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";

interface ILoginFirstPage {
  next: () => void;
  phoneNumber: string;
  handlePhoneNumberChange: (num: string) => void;
}

const LoginFirstPage = (props: ILoginFirstPage) => {
  const { next, phoneNumber, handlePhoneNumberChange } = props;

  const handleInputChange = (e: any) => {
    handlePhoneNumberChange(e.target.value);
  };

  const handleSubmit = () => {
    next();
    console.log(phoneNumber);
  };

  return (
    <div>
      <h3 className={style.header3}>ورود / ثبت‌نام</h3>
      <sub className={style.paragraph}>
        برای ورود یا ثبت نام لطفا شماره موبایل خود را وارد کنید
      </sub>
      <div className={style.input}>
        <div>شماره موبایل*</div>
        <TextInput
          type="text"
          name="phoneNumber"
          autoComplete="off"
          placeholder="مثلا 099300000000"
          onChange={handleInputChange}
        />
      </div>
      <Button
        disabled={phoneNumber.length !== 11}
        className={style.submitBtn}
        onClick={handleSubmit}
      >
        تایید شماره موبایل
      </Button>
    </div>
  );
};

export default LoginFirstPage;

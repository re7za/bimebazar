import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Services
import { sendNumber } from "../../services/authentication";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";
import Loader from "../../lib/loader";

interface ILoginFirstPage {
  next: () => void;
  phoneNumber: string;
  handlePhoneNumberChange: (num: string) => void;
}

const LoginFirstPage = (props: ILoginFirstPage) => {
  const { next, phoneNumber, handlePhoneNumberChange } = props;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    handlePhoneNumberChange(e.target.value);
    setError(false);
  };

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    const res = await sendNumber(phoneNumber).catch((err) => {
      console.error(err);
      setError(true);
    });
    if (res?.status?.code === 200) {
      next();
    } else {
      console.error("There is a problem!");
      setError(true);
    }
    setLoading(false);
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
          placeholder="مثلا 099300000000"
          onChange={handleInputChange}
        />
      </div>
      {error && <div className={style.error}>خطایی رخ داده است!</div>}
      {loading ? (
        <Loader />
      ) : (
        <Button
          disabled={phoneNumber.length !== 11}
          className={style.submitBtn}
          onClick={handleSubmit}
        >
          تایید شماره موبایل
        </Button>
      )}
    </div>
  );
};

export default LoginFirstPage;

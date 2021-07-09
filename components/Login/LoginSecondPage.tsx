import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";
import useCounter from "../../hooks/useCounter";

interface ILoginSecondPage {
  next: () => void;
  previous: () => void;
  phoneNumber: string;
}

const LoginSecondPage = (props: ILoginSecondPage) => {
  const { next, previous, phoneNumber } = props;

  const [confirmCode, setConfirmCode] = useState("");
  const { reset, counter } = useCounter();

  const handleInputChange = (e: any) => {
    setConfirmCode(e.target.value);
  };

  const handleResend = () => {
    reset();
    console.log(phoneNumber);
  };

  const handleSubmit = () => {
    next();
    console.log(confirmCode);
  };

  return (
    <div>
      <h3 className={style.header3}>تایید شماره موبایل</h3>
      <sub className={style.paragraph}>
        کد یکبار مصرف به شماره 09931202009 ارسال شد.
      </sub>
      <div className={style.prevBtnBox}>
        <Button className={style.prevBtn} onClick={previous}>
          ویرایش شماره موبایل
        </Button>
      </div>
      <div className={style.input}>
        <div>کد یکبار مصرف*</div>
        <TextInput
          type="text"
          name="code"
          autoComplete="off"
          placeholder="کد یکبار مصرف را وارد کنید"
          onChange={handleInputChange}
        />
      </div>
      <div className={style.buttonsRow}>
        {counter <= 120 ? (
          <div className={style.timer}>{120 - counter} ثانیه</div>
        ) : (
          <Button className={style.resendBtn} onClick={handleResend}>
            ارسال مجدد کد
          </Button>
        )}
        <Button
          disabled={confirmCode.length !== 5}
          className={style.submitBtn}
          onClick={handleSubmit}
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

export default LoginSecondPage;

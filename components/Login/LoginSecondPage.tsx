import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Services
import {
  sendNumber,
  sendVerificationCode,
} from "../../services/authentication";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";
import useCounter from "../../hooks/useCounter";
import Loader from "../../lib/loader";

interface ILoginSecondPage {
  next: () => void;
  previous: () => void;
  phoneNumber: string;
}

const codeTimeout = 120;

const LoginSecondPage = (props: ILoginSecondPage) => {
  const { next, previous, phoneNumber } = props;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [confirmCode, setConfirmCode] = useState("");
  const { reset, counter } = useCounter();

  const handleInputChange = (e: any) => {
    setError(false);
    setConfirmCode(e.target.value);
  };

  const handleResend = async () => {
    setError(false);
    setLoading(true);
    const res = await sendNumber(phoneNumber).catch((err) => {
      console.error(err);
      setError(true);
    });
    if (res?.status?.code === 200) {
      reset();
    } else {
      console.error("There is a problem!");
      setError(true);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    const res = await sendVerificationCode(confirmCode, phoneNumber).catch(
      (err) => {
        console.error(err);
        setError(true);
      }
    );
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
      <h3 className={style.header3}>تایید شماره موبایل</h3>
      <sub className={style.paragraph}>
        کد یکبار مصرف به شماره {phoneNumber} ارسال شد.
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
      {error && <div className={style.error}>خطایی رخ داده است!</div>}
      {loading ? (
        <Loader />
      ) : (
        <div className={style.buttonsRow}>
          {counter <= codeTimeout && !error ? (
            <div className={style.timer}>{codeTimeout - counter} ثانیه</div>
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
      )}
    </div>
  );
};

export default LoginSecondPage;

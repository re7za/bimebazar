import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Services
import { sendUserName } from "../../services/authentication";

// Misc
import Button from "../../lib/Button";
import TextInput from "../../lib/TextInput";
import Loader from "../../lib/loader";

interface ILoginSuccessPage {
  done: () => void;
}

const LoginThirdPage = (props: ILoginSuccessPage) => {
  const { done } = props;

  const [nickname, setConfirmCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setConfirmCode(e.target.value);
  };

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    const res = await sendUserName(nickname).catch((err) => {
      console.error(err);
      setError(true);
    });
    if (res?.status?.code === 200) {
      done();
    } else {
      console.error("There is a problem!");
      setError(true);
    }
    setLoading(false);
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
      {error && <div className={style.error}>خطایی رخ داده است!</div>}
      {loading ? (
        <Loader />
      ) : (
        <Button
          disabled={nickname.length > 3}
          className={style.submitBtn}
          onClick={handleSubmit}
        >
          تکمیل ثبت نام
        </Button>
      )}
    </div>
  );
};

export default LoginThirdPage;

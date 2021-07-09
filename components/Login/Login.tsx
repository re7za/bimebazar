/* eslint-disable react/display-name */
import React, { useState } from "react";

import style from "../../assets/styles/components/login/style.module.scss";

// Misc
import FirstPage from "./LoginFirstPage";
import SecondPage from "./LoginSecondPage";
import ThirdPage from "./LoginThirdPage";
import SuccessPage from "./LoginSuccessPage";

type LoginType = "first" | "second" | "third" | "success";

const Login = () => {
  const [currentPage, setCurrentPage] = useState<LoginType>("first");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nextPage = () => {
    if (currentPage === "first") {
      setCurrentPage("second");
    } else setCurrentPage("third");
  };

  const prevPage = () => {
    if (currentPage === "third") {
      setCurrentPage("second");
    } else setCurrentPage("first");
  };

  const handlePhoneNumberChange = (num: string) => {
    setPhoneNumber(num);
  };

  const done = () => {
    setCurrentPage("success");
  };

  const pages = {
    first: () => (
      <FirstPage
        next={nextPage}
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
    ),
    second: () => (
      <SecondPage
        next={nextPage}
        previous={prevPage}
        phoneNumber={phoneNumber}
      />
    ),
    third: () => <ThirdPage done={done} />,
    success: () => <SuccessPage />,
  };

  return <div className={style.login}>{pages[currentPage]()}</div>;
};

export default Login;

import React from "react";

import style from "../../assets/styles/components/navbar/style.module.scss";

// Misc
import Button from "../../lib/Button";
import Login from "../Login";
import useModal from "../../lib/useModal";

const Navbar = () => {
  const loginModal = useModal({
    title: "بیمه بازار",
  });

  return (
    <>
      <div className={style.navbar}>
        <h2 className={style.logo}>بیمه بازار</h2>
        <div className={style.buttons}>
          <Button className={style.participationBtn} onClick={loginModal.open}>
            شرکت در مسابقه
          </Button>
          <Button className={style.login} onClick={loginModal.open}>
            ورود / ثبت نام
          </Button>
        </div>
      </div>
      <loginModal.Modal>
        <Login />
      </loginModal.Modal>
    </>
  );
};

export default Navbar;

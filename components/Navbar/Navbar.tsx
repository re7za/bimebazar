import React from "react";

import style from "../../assets/styles/components/navbar/style.module.scss";

// Misc
import Button from "../../lib/Button";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>بیمه بازار</div>
      <div className={style.buttons}>
        <Button className={style.participationBtn}>شرکت در مسابقه</Button>
        <Button className={style.login}>ورود / ثبت نام</Button>
      </div>
    </div>
  );
};

export default Navbar;

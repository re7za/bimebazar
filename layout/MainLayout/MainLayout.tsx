/** @format */

import React from "react";

import style from "../../assets/styles/layout/mainLayout/style.module.scss";

// Misc
import Navbar from "../../components/Navbar";

export interface IMainLayout {
  children: React.ReactNode;
}

function MainLayout(props: IMainLayout) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className={style.layout}>{children}</div>
    </>
  );
}

export default MainLayout;

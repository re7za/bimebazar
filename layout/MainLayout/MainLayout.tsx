/** @format */

import React from "react";

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
      {children}
    </>
  );
}

export default MainLayout;

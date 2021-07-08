import React from "react";

import style from "../../assets/styles/components/CenterSection/style.module.scss";

// Misc
import Button from "../../lib/Button";

// Types
import { ICenterSection } from "../../types/friendship/types";

const CenterSection = (props: ICenterSection) => {
  const { button_text, image, text, title, reverse } = props;

  return (
    <div className={style.section}>
      <div className={`${style.imgBox} ${reverse ? style.reverse : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={style.image}
          src={"https://bimebazar.com" + image}
          alt="vector"
          // layout="fill"
          // objectFit="cover"
          // quality={100}
        />
      </div>
      <div className={style.content}>
        <h2 className={style.header}>{title}</h2>
        <p className={style.paragraph}>{text}</p>
        <div className={style.callToActionBtn}>
          <Button className={style.btn}>{button_text}</Button>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;

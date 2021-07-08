import React from "react";

import style from "../../assets/styles/components/footer/style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <h2 className={style.logo}>بیمه بازار</h2>
        <p className={style.paragraph}>
          بیمه‌بازار جایی مطمئن برای مشاوره، مقایسه و خرید آنلاین بیمه است. در
          وب‌سایت بیمه‌بازار می‌توانید قیمت انواع بیمه را از تمامی شرکت‌ها
          استعلام بگیرید، شرایط و پوشش‌های مختلف را با هم مقایسه کنید و بیمه
          مورد نظر خود را آنلاین سفارش دهید. بیمه‌نامه شما در کوتاه‌ترین زمان
          صادر شده و به آدرس دلخواه شما ارسال می‌شود.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

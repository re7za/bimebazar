import "../styles/globals.css";
import type { AppProps } from "next/app";

import style from "../assets/styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={style.root}>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

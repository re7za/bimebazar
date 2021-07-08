import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

// Types
import { GetServerSideProps } from "next";

// Misc
import MainLayout from "../../layout/MainLayout/MainLayout";

const Friendship = (props: any) => {
  const { items, meta } = props.res?.data;
  console.log(props.res.data);

  return (
    <div className={styles.container}>
      <Head>
        <title>{meta?.meta_title}</title>
        <meta name="description" content={meta?.meta_description} />
        <meta name="type" content={meta?.meta_type} />
        <meta name="image" content={meta?.meta_image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainLayout>friendship</MainLayout>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://bimebazar.com/api/super_hero_landing/?main_type=friendship-landing"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      res,
    },
  };
};

export default Friendship;

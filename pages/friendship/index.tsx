import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

// Types
import { GetServerSideProps } from "next";
import { ICenterSection, IFriendship } from "../../types/friendship/types";

// Misc
import MainLayout from "../../layout/MainLayout/MainLayout";
import CenterSection from "../../components/CenterSection";
import Footer from "../../components/Footer";

const Friendship = (props: IFriendship) => {
  const { items, meta } = props.res?.data;

  let c = 1;

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
        <MainLayout>
          {items.map(
            (item: ICenterSection) =>
              item.image &&
              c++ && (
                <CenterSection
                  key={item.title}
                  reverse={c % 2 === 1}
                  {...item}
                />
              )
          )}
        </MainLayout>
      </main>
      <Footer />
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

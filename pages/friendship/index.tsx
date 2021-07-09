import Head from "next/head";
import styles from "../../styles/Home.module.css";

// Types
import { GetServerSideProps } from "next";
import { ICenterSection, IFriendship } from "../../types/friendship/types";

// Services
import { fetchFriendship } from "../../services/friendship";
import { getUser } from "../../services/user";

// Misc
import MainLayout from "../../layout/MainLayout/MainLayout";
import CenterSection from "../../components/CenterSection";
import Footer from "../../components/Footer";

const Friendship = (props: IFriendship) => {
  const { items, meta } = props.res?.data;

  console.log(props);

  let sectionCounter = 1;

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
              sectionCounter++ && (
                <CenterSection
                  key={item.title}
                  reverse={sectionCounter % 2 === 1}
                  {...item}
                />
              )
          )}
        </MainLayout>
      </main>
      <Footer />
      <div id="modal-root"></div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const user = await getUser(req.cookies.token);
  const res = await fetchFriendship();

  return {
    props: {
      res,
    },
  };
};

export default Friendship;

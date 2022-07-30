/*-----------------------------
 * ■ index.jsとは
 * トップページ(/)となるファイル
 * Nuxtでいうところのindex.vue
 * Head = metaデータを記入できるコンポーネント
 * Link = linkをするコンポーネント
 * 例) <Link href="https://nextjs.org"><a>Next.js!</a></Link>
 *
 * Layout = サイト全体をwrapするコンポーネントの読み込み
 *
 *----------------------------------*/

import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Side from "../components/Side";
import { client } from "../libs/client";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import styles from "../styles/Home.module.css";

function Time() {
  return <time suppressHydrationWarning>{format(new Date(), "HH:mm:ss", { locale: ja })}</time>;
}

let mode = true;
function Dark() {
  mode = !mode;

  if (mode === false) {
    document.documentElement.style.setProperty("--text-color", "#bdbdbd");
    document.documentElement.style.setProperty("--line-color", "#bdbdbd");
    document.documentElement.style.setProperty("--body-color", "#000000");
    document.documentElement.style.setProperty("--btn-color", "#bdbdbd");
  } else if (mode === true) {
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--line-color", "#000000");
    document.documentElement.style.setProperty("--body-color", "#bdbdbd");
    document.documentElement.style.setProperty("--btn-color", "#000000");
  }
}

export default function Home({ photo }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>KRAFT PhotoStock</title>
          <meta name="description" content="KRAFT PhotoStockSite in NextJs" />
          <meta name="twitter:description" content="KRAFT PhotoStockSite in NextJs" />
          <meta property="og:title" content="KRAFT PhotoStock" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="KRAFT PhotoStockSite in NextJs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={Dark} className={styles.button}></button>
        <div className={styles.containerFlex}>
          <Side />
          <div className={styles.containerRight}>
            <h1 className={styles.containerTitle}>KRAFT PhotoStock</h1>
            <p className={styles.containerSub}>
              <span>Access : </span>
              <Time />
            </p>
            {/* mapで配列を回す(v-forのイメージ) */}
            <div className={styles.containerCards}>
              {photo.map((photo) => {
                return (
                  <div className={styles.card} key={photo.id}>
                    <img src={photo.img.url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "photo" });

  return {
    props: {
      photo: data.contents,
    },
  };
};

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
import Link from "next/link";
import Layout from "../components/layout";
import Side from "../components/Side";
import styles from "../styles/Home.module.css";

export default function Home() {
  /*----------------------------
   * ループ用の配列
   * ------------------------------*/
  const items = [
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
    { id: 5, content: "" },
    { id: 6, content: "" },
  ];
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.containerFlex}>
          <Side />
          <div className={styles.containerRight}>
            <h2 className={styles.containerTitle}>KRAFT PhotoStock</h2>
            <h3 className={styles.containerSub}>21:48:56</h3>
            {/* mapで配列を回す(v-for的な感じ) */}
            <div className={styles.containerCards}>
              {items.map((item) => {
                return (
                  <div className={styles.card} key={item.id}>
                    {item.id}
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

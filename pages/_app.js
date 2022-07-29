/*-----------------------------
 * ■ _app.jsとは
 * ページ共通で読み込ませたい処理などを記述する
 *
 *
 *
 *----------------------------------*/
import "../styles/reset.css";
import "../styles/setting.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

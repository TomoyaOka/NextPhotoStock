/*-----------------------------
 * ■ layout.jsとは
 * サイト全体をwrapするファイル
 * Nuxtでいうところのlayout/default.vue
 *
 * 共通パーツ(header footer)を読み込み
 *----------------------------------*/
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;

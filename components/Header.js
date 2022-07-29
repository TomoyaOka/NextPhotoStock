import Link from "next/link";
import Image from "next/image";
import styles from "./style/Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.headerBox}>
          <Image src="/logo.png" alt="" width={30} height={30}></Image>
        </h2>
      </header>
    </>
  );
};

export default Header;

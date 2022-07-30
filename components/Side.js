import styles from "./style/Side.module.css";
import Link from "next/link";
const Side = () => {
  return (
    <>
      <div className={styles.side}>
        <p className={styles.sideText}>A site for storing photos taken on holidays and photos used at work.</p>
        <p className={styles.sideText}>Unauthorized use or unauthorized reproduction is prohibited.</p>
      </div>
    </>
  );
};

export default Side;

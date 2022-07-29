import styles from "./style/Side.module.css";
const Side = () => {
  return (
    <>
      <div className={styles.side}>
        <ul className={styles.sideBody}>
          <li>Archives</li>
          <li>All</li>
          <li>City</li>
          <li>Landscape</li>
        </ul>
      </div>
    </>
  );
};

export default Side;

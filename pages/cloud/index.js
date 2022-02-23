import styles from "../../styles/Cloud.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dscr}>
          <h1 className={styles.title}>lifecats Cloud Storage</h1>
          <p>A reliable way to save a file and share it with the world.</p>
          <p>Totaly free storage. No data caps.</p>
          <button className={styles.button}>Login with Google</button>
        </div>
      </div>
    </>
  );
}

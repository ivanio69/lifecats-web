import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgCircle3} />
        <div className={styles.bgCircle4} />
      </div>
      <h1 className={styles.title}>lifecats</h1>
      <ul className={styles.menu}>
        <li>
          <Link href="/cloud">Cloud Storage</Link>
        </li>
        <li>
          <Link href="/lnk">Link Shortener</Link>
        </li>
        <li>
          <Link href="/lcinf">LCINF</Link>
        </li>
      </ul>
    </div>
  );
}

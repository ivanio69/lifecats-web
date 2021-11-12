import Head from "next/head";
import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>./lifecats</title>
        <meta
          name="description"
          content="./lifecats- Web developer and musiciant in one bundle :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
}

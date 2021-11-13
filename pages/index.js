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

      <header className={styles.header}>
        <h1>./lifecats</h1>
        <a>Home</a>
        <a>Link Shortener</a>
        <div></div>
      </header>
      <main>
        <div className={styles.container1}>
          <div className={styles.titleBox}>
            <h1 className={styles.titleBlack}>Web developer and musiciant</h1>
            <h1 className={styles.titleBlue}>in one bundle.</h1>
          </div>
          <div className={styles.buttons}>
            <button onClick={()=>{window.location.href="https://github.com/lifecats"}}>Check out my Github</button>
            <br/>
            <button onClick={()=>{window.location.href="https://open.spotify.com/artist/7M9VNbwTIQBVDIeamFHC0a?si=Dxjz4DoQTmyifFKWhkZ5mQ"}}>Listen to my music</button>
          </div>
        </div>
      </main>
    </div>
  );
}

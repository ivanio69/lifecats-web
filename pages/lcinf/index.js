import styles from "../../styles/lcinf.module.css";

export default function LCINF() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dscr}>
          <h1 className={styles.title}>lifecats Infrastructures</h1>
          <p>
            Got an app that you want to share with the world? We can help you!
          </p>
          <p>
            Need to host a website, but you dont want to spend loads of money on
            hosting? Try ours! It's free!
          </p>
          <p>99.9% uptime</p>
          <a href="/contact">
            {" "}
            <button className={styles.button}>Get in contact</button>
          </a>
        </div>
      </div>
    </>
  );
}

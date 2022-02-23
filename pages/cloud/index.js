import styles from "../../styles/Cloud.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { BsCloudPlusFill, BsFillFileTextFill } from "react-icons/bs/";

export default function Home() {
  const session = useSession();

  return (
    <>
      <div className={styles.container}>
        {session.status === "authenticated" ? (
          <>
            {/* Main Layout */}
            <div className={styles.titlebar}>
              <span className={styles.name}>
                <h2 className={styles.cloud}>./lifecats Cloud </h2>
                <h2>| Files</h2>
              </span>

              <span onClick={() => signOut()}>{session.data.user.name}</span>
            </div>
            <div className={styles.main}>
              <div className={styles.file}>
                <BsFillFileTextFill className={styles.icon} />
                <span>water.mp4</span>
              </div>
              {/* New file */}
              <div className={styles.newFile}>
                <BsCloudPlusFill className={styles.icon} />
                <span>Upload File</span>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.dscr}>
            <h1 className={styles.title}>lifecats Cloud Storage</h1>
            <p>A reliable way to save a file and share it with the world.</p>
            <p>Totaly free storage. No data caps.</p>
            <button onClick={() => signIn("google")} className={styles.button}>
              Login with Google
            </button>
          </div>
        )}
      </div>
    </>
  );
}

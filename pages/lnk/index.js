import React from "react";
import Link from "next/link";
import styles from "../overview.module.css";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Lnk() {
  const [shorten, setShorten] = React.useState(false);
  const [shortenUrl, setShortenUrl] = React.useState(false);
  return (
    <>
      {shorten ? (
        <div className="container lexend">
          <title>./lifecats URL shortener</title>
          <h1 className="logo">
            <Link href="/">./lifecats URL shortener</Link>
          </h1>
          <a href={"/lnk/" + shortenUrl}>
            <h1 className="logo">{"https://lifecats.cf/lnk/" + shortenUrl}</h1>{" "}
          </a>
          <CopyToClipboard text={"https://lifecats.cf/lnk/" + shortenUrl}>
            <button className="button">Copy</button>
          </CopyToClipboard>
          <button
            onClick={() =>
              (window.location.href = "https://lifecats.cf/lnk/" + shortenUrl)
            }
            className="button"
          >
            Go!
          </button>
        </div>
      ) : (
        <div className="container lexend">
          <title>./lifecats URL shortener</title>
          <h1 className="logo">
            <Link href="/">./lifecats URL shortener</Link>
          </h1>
          <p>Free, fast, no limitations!</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("https://cdn.lifecats.cf/api/v1/shorten", {
                  url: e.target[0].value,
                })
                .then((r) => {
                  setShorten(true);
                  setShortenUrl(r.data.slug);
                });
            }}
          >
            <input
              type="url"
              required
              style={{ margin: "10px 0", width: "100%" }}
              className={styles.input}
              placeholder="Insert long url here!"
            />
            <button className="button">Shorten!</button>
          </form>
        </div>
      )}
    </>
  );
}

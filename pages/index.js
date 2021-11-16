import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Main.module.css";
import Card from "./_card";

export default function Main() {
  const [longLink, setLongLink] = useState("");
  const linksSaved = process.browser
    ? JSON.parse(localStorage.getItem("savedLinks"))
    : undefined;
  const shorten = () => {
    fetch(`/api/shorten?link=${longLink}`).then((r) => {
      r.json().then((resp) => {
        console.log(resp);
        let slug = resp.slug;
        if (resp.slug !== undefined) {
          if (localStorage.getItem("savedLinks") > null)
            localStorage.setItem(
              "savedLinks",
              JSON.parce(localStorage.getItem("savedLinks")).push({
                lingLink,
                slug,
              })
            );
          else
            localStorage.setItem(
              "savedLinks",
              JSON.stringify([{ longLink, slug }])
            );
          window.location.reload();
        } else {
          alert("Something went wrong, try again later!");
        }
      });
    });
  };
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
      </header>
      <main>
        <div className={styles.container1}>
          <div className={styles.titleBox}>
            <h1 className={styles.titleBlack}>Web developer and musiciant</h1>
            <h1 className={styles.titleBlue}>in one bundle.</h1>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                window.location.href = "https://github.com/lifecats";
              }}
            >
              Check out my Github
            </button>
            <br />
            <button
              onClick={() => {
                window.location.href =
                  "https://open.spotify.com/artist/7M9VNbwTIQBVDIeamFHC0a?si=Dxjz4DoQTmyifFKWhkZ5mQ";
              }}
            >
              Listen to my music
            </button>
          </div>
        </div>

        <div className={styles.container2}>
          <h1>My lastest projects:</h1>
          <ul>
            <li>
              <Card
                title="lifecats.codes"
                text="My personal website (this one)"
                link="lifecats.codes"
              />
            </li>
            <li>
              <Card
                title="S̴t̴r̶a̷n̵e̵"
                text="A new geń̷͍̳̭̰̃͐̚e̸̖̦̣͔̯̓̽͊͑̈́r̶̢̛̺̖͕̯̦̯̤̿̆͂͑̂͑͑̎̀̉̚̕a̴͕͇̗͆̿͐͐̄̂̊̒͜t̸̝̞͍͎̰̜̤̰̲̞͓̞̥͗͛́̽̂̐͑į̴̨̛̟̼̯̱̳̹͌̊̎̂̉͑̽͋̚̕o̶͖̻̰̫̹̍n̶̢̢̏͂͌͘̚̚o̴͙̥̥̪̟̰̎͒̐́̿̍̆̿̈͘͘͝f̶͎̥͙͂͑̇̔̀̓͐̾̎̕-̵̜̟͚͎̪̯͉̘̓͛̀̐̈́̃̽̇͘͘̚-̸̥͇̗̣̬̄̎̌͠-̷̠͕͔̮̥͛̈́̈͝-̸̢͖͕͕̳̳̙̤͚̰̜͂̌-̶͓̺̽͗̏̎̔̾̒̔͒̒-̵̤̬̠͎͛̊́̈́̊̿́̕-̵̩͕̏̆̈́̇̓̋́͌̎̀̄́́͝ͅ-̶̱̩̅̀̀͋̄̿̂̏̎̓̕͠͝ͅ-̴̨̟̩̮̩̩̱̹̠̥̯̯̹͉͑̾͑̌̈́͒͒͋̕̕͝-̶̧͈͔̝̗̽̿͌̎̀̀͊̍̃̏̒́͘̕-̸̠̰̽̈́̑̈͒̿̅̅̅͊͐̕͝-̴̡̩̒̔͒̾̓̑̒̒̾̇̎̚-̷͕̜̤͙̳̬̬̔̕͝͠-̶̯͈̲͈̬̪̓́́̆̎͋̂̂̕̕̚͜-̸̺̺̼̙͈̣͇͈̼̙̪̥̩̲̄͂̽̓̑͛̽̆͝ͅ-̶̡̡̢̛͕̮̼̗̭͓̪̘̦͖͇͔̈́̓̽̂̅́̌̄̀̏͘͝͝-̷̢͈̦̙̜̺̩̙̩̜̙͓̟̾͛̌̀̄̈́̎̏͝-̶̡̨̢̫̻̻̻͈̹͔̬̒͛̔̿̎͘͠-̷̡̥̙͇̪͉̟̤̮̮̥̘̆̎-̸̖͓͕̊"
                link="link: ḻ̶̛͌̅̑̍͑̄̒̑̓̈̚͠m̴̥͓̈́̉̔̈̄̇.̴̭̗̹͓̜̫̰̻̹̪̤̌̉̊̄͌͜͝e̷͓͙͗̌n̶̻̭̿͐̊̚ą̸̧̱̖̭̻̟̗͉̤̆͑̿̄̂́̏͝r̵̖͎̥͙͔͍̉͋̀t̴͎̠͊̂̉͐̆s̶̡̢̭̟̭̝̜̘̟̲̜͉̳̻̈́̇̃́̒͊̓͑̓͑́̕ͅ\̵̡̢̻̮̼̪̟̘̦̬̰̖̙̣͆̀͒͛̈͒̍́̇͝͝͠ͅ\̶̢̢̛̥̹̮̥͕̻͎̗̹̞̮̝̇̏̿͆̔̈́̓́̏͒̂̚:̷̧̡͍͔̱͙̼̝̮͎̭̦͕͒̓̎̿̊͂̊́̍̆͝ͅͅs̵̢̧̢͍͇̙͉̹̫̮̜̓p̶̧̰̃́̈́͐̓̒͋̉̃͒̇͛͘͘t̵̤̗͉͉̩̦͕̦̟̼͉̍͑̃̽̉̓̾̄̄͝t̸̰̭͇͓̟͉̭͈̦̖̼̩͂̏̓̈̓͂̕͜h̶̤̒̉̎̈́̌̊͐̾̐̈́̚͠"
              />
            </li>
            <li>
              <Card
                title="Mydiary"
                text="A simple way to store notes. 
                Currently down, but available on github"
                link="github.com/lifecats/mydiary"
              />
            </li>
          </ul>
        </div>

        <div className={styles.container3}>
          <h1>My music:</h1>
          <ul>
            <li
              onClick={() =>
                (window.location.href =
                  "https://open.spotify.com/artist/7M9VNbwTIQBVDIeamFHC0a?si=Dxjz4DoQTmyifFKWhkZ5mQ")
              }
              style={{ background: "#00AE70" }}
            >
              Spotify
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://www.deezer.com/en/artist/80732582")
              }
              style={{ background: "#98C1FF" }}
            >
              Deezer
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://www.amazon.com/s?k=LIFECATS&i=digital-music&search-type=ss&ref=ntt_srch_drd_B082J74KW7")
              }
              style={{ background: "#98C1FF" }}
            >
              Amazon
            </li>
          </ul>
          <ul>
            <li
              onClick={() =>
                (window.location.href =
                  "https://music.apple.com/us/artist/lifecats/1490901435")
              }
              style={{ background: "#FF98C9" }}
            >
              Apple Music
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://www.youtube.com/channel/UC8bH0TTHLDCFvVZXXP2_Scw")
              }
              style={{ background: "#FF9898" }}
            >
              Youtube
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://www.pandora.com/artist/lifecats/burnt-down/ALj7cl332fpJlr2")
              }
              style={{ background: "#98C1FF" }}
            >
              Pandora
            </li>
          </ul>
        </div>

        <div className={styles.container4}>
          <div className={styles.ad}>
            <h2>Try this link shorterer from lifecats!</h2>
            <div className={styles.input}>
              <input
                type="url"
                required
                onChange={(e) => {
                  setLongLink(e.target.value);
                }}
                placeholder="http://enter-your.very/long/link?here"
              />
              <button
                onClick={() => {
                  shorten();
                }}
              >
                Shorten!
              </button>
            </div>
          </div>
          <div className={styles.saved}>
            {process.browser ? (
              localStorage.getItem("savedLinks") !== null ? (
                <>
                  {linksSaved.map((e) => {
                    return (
                      <div key={e.slug} className={styles.linkCard}>
                        <h2>lifecats.codes/lnk/<span>{e.slug}</span></h2>
                        <span>Leads to <a href={e.longLink}>{e.longLink}</a></span>
                      </div>
                    );
                  })}
                </>
              ) : (
                <p>You didn&apos;t try that new link shortener from lifecats yet!</p>
              )
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Main.module.css";
import Card from "./_card";

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
              onClick={() => (window.location.href = "https://open.spotify.com/artist/7M9VNbwTIQBVDIeamFHC0a?si=Dxjz4DoQTmyifFKWhkZ5mQ")}
              style={{ background: "#00AE70" }}
            >
              Spotify
            </li>
            <li
              onClick={() => (window.location.href = "https://www.deezer.com/en/artist/80732582")}
              style={{ background: "#98C1FF" }}
            >
              Deezer
            </li>
            <li
              onClick={() => (window.location.href = "https://www.amazon.com/s?k=LIFECATS&i=digital-music&search-type=ss&ref=ntt_srch_drd_B082J74KW7")}
              style={{ background: "#98C1FF" }}
            >
              Amazon
            </li>
          </ul>
          <ul>
            <li
              onClick={() => (window.location.href = "https://music.apple.com/us/artist/lifecats/1490901435")}
              style={{ background: "#FF98C9" }}
            >
              Apple Music
            </li>
            <li
              onClick={() => (window.location.href = "https://www.youtube.com/channel/UC8bH0TTHLDCFvVZXXP2_Scw")}
              style={{ background: "#FF9898" }}
            >
              Youtube
            </li>
            <li
              onClick={() => (window.location.href = "https://www.pandora.com/artist/lifecats/burnt-down/ALj7cl332fpJlr2")}
              style={{ background: "#98C1FF" }}
            >
              Pandora
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

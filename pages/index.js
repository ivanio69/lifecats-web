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
      </main>
    </div>
  );
}

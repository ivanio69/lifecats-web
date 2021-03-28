import React from "react";
import "./fonts.css";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  logo: { color: "#338FFF", fontSize: 60, fontWeight: "600" },
  center: { width: window.innerWidth > 720 ? "50vw" : "100vw", margin: "auto" },
});
function App() {
  return (
    <div className={css(styles.center)}>
      <h1 className={css(styles.logo) + " lexend"}>./lifecats</h1>
      <p className="rm">Welcome to ./lifecats website!</p>
      <p className="rm">
        Came here for <a href="/cdn">CDN</a>?
      </p>
      <p className="rm">
        Hi! I am a full stack web developer! Also i write music sometimes.
        <br />I live in Belarus and stand with{" "}
        <a href="https://twitter.com/search?q=%23standwithbelarus">
          #StandWithBelarus
        </a>{" "}
        comunity 🤍<span style={{ color: "red" }}>♥️</span>🤍
      </p>
      <p className="rm">
        <a href="https://g.co/kgs/TC3gdg">Google</a>{" "}
        <a href="https://www.pandora.com/artist/lifecats/burnt-down/ALj7cl332fpJlr2">
          Pandora
        </a>{" "}
        <a href="https://music.apple.com/us/artist/lifecats/1490901435">
          Apple Music
        </a>{" "}
        <a href="https://www.youtube.com/channel/UCj1RfokacfvbOAoV24CRiqg">
          Youtube
        </a>{" "}
        <a href="https://twitter.com/lifecats_pog">Twitter</a>{" "}
        <a href="https://www.instagram.com/lifecats_of/">Instagram</a>{" "}
        <a href="https://music.amazon.in/artists/B082J74KW7/lifecats">
          Amazon Music
        </a>{" "}
        <a href="https://github.com/lifecats">Github</a>
      </p>
    </div>
  );
}

export default App;

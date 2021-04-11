import React from "react";
import Link from "next/link";

function App() {
  return (
    <div className="container">
      <title>./lifecats </title>
      <h1 className="lexend logo">
        {" "}
        <Link href="/">./lifecats</Link>
      </h1>
      <p className="rm">Welcome to ./lifecats website!</p>
      <p className="rm">
        Came here for <Link href="/cdn">CDN</Link>?
      </p>{" "}
      <p className="rm">
        <Link href="/lnk">Link Shortener</Link>?
      </p>
      <p className="rm">
        Hi! I am a full stack web developer! Also i write music sometimes.
        <br />I live in Belarus (
        <Link href="https://twitter.com/search?q=%23standwithbelarus">
          #StandWithBelarus
        </Link>{" "}
        🤍<span style={{ color: "red" }}>♥️</span>🤍 )
      </p>
      <p className="rm">
        Also I have 3 years of coding expirience and 4 years of in composing
        music.
      </p>
      <p className="rm">
        <Link href="https://g.co/kgs/TC3gdg">Google</Link>{" "}
        <Link href="https://open.spotify.com/artist/7M9VNbwTIQBVDIeamFHC0a?si=hwK57LabQvqoMssgrLWcEA">
          Spotify
        </Link>{" "}
        <Link href="https://www.pandora.com/artist/lifecats/burnt-down/ALj7cl332fpJlr2">
          Pandora
        </Link>{" "}
        <Link href="https://music.apple.com/us/artist/lifecats/1490901435">
          Apple Music
        </Link>{" "}
        <Link href="https://www.youtube.com/channel/UCj1RfokacfvbOAoV24CRiqg">
          Youtube
        </Link>{" "}
        <Link href="https://twitter.com/lifecats_pog">Twitter</Link>{" "}
        <Link href="https://www.instagram.com/lifecats_of/">Instagram</Link>{" "}
        <Link href="https://music.amazon.in/artists/B082J74KW7/lifecats">
          Amazon Music
        </Link>{" "}
        <Link href="https://github.com/lifecats">Github</Link>
      </p>
    </div>
  );
}

export default App;

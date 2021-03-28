import React from "react";
import Link from "next/link";

function App() {
  return (
    <div className="container">
      <title>./lifecats </title>
      <h1 className="lexend logo">
        <Link href="/">./lifecats</Link>
      </h1>
      <h2 className="rm">Usage of CDN</h2>
      <p className="rm" style={{ wordBreak: "break-word" }}>
        If you need to download from CDN - you probably got a link - something
        like https://cdn.lifecats.cf/coolgamer69/my_important_school_project.mp4
        (not a real URL). <br />
        Go ahead and paste it into your address bar in your browser. If you get
        an error 'Not found' - it means, well, file was not found. either
        becouse it was deleted or just misstyped filename.
      </p>
      <h2 className="rm">How to upload your file here</h2>
      <p className="rm" style={{ wordBreak: "break-word" }}>
        All uploaded files will stay here forever (until you delete them!). To
        upload you files: contact me at lifecats@gmail.com. There is a chance
        that I will develop a dashboard :)
      </p>
    </div>
  );
}

export default App;

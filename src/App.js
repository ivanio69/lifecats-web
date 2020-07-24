import React from 'react';
import {
  GithubOutlined,
  YoutubeFilled,
  TwitterOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="letters"><span class="letter">L</span><span class="letter">I</span><span class="letter">F</span><span class="letter">E</span><span class="letter">C</span><span class="letter">A</span><span class="letter">T</span><span class="letter">S</span></div>
        <p>Some random guy from internet</p>
      </div><div className="box">

        <a href="https://github.com/lifecats">
          <GithubOutlined />
        </a>
        <a href="https://www.youtube.com/channel/UCj1RfokacfvbOAoV24CRiqg">
          <YoutubeFilled /></a>
        <a href="https://twitter.com/lifecats_of">
          <TwitterOutlined /></a>
        <a href="https://www.google.com/search?q=lifecats">
          <GoogleOutlined /></a>

      </div>


    </div>
  );
}

export default App; 
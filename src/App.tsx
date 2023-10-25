import React, { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";
import Greeting from "./components/Greeting";
import TitleLayout from "./components/Title";
import Location from "./components/Location";
import CongratulatoryMoney from "./components/CongratulatoryMoney";
import Configs from "./configs";
import Share from "./components/Share";
import { Layout } from "antd";
import musicSrc from "./resources/background.mp3";

const { Footer } = Layout;

function App() {
  const [audio] = useState(new Audio(musicSrc));
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (!accepted)
      audio
        .play()
        .catch((e) => {
          console.log(e);
          setAccepted(false);
        })
        .then(() => setAccepted(true));
  }, []);

  return (
    <main style={{ height: "100%" }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
    </main>
  );
}

export default App;

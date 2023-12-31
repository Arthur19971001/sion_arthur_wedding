import React, { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";
import Greeting from "./components/Greeting";
import TitleLayout from "./components/Title";
import Location from "./components/Location";
import CongratulatoryMoney from "./components/CongratulatoryMoney";
import Configs from "./configs";
import Share from "./components/Share";
import Form from "./components/Form";

function App() {

  return (
    <main style={{ height: "100%" }}>
     <Form config={Configs} />
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

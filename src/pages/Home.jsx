import React from "react";
import Header from "../components/header/Header";
import Asistance from "../components/asistance/Asistance";
import Worklist from "../components/worklist/Worklist";
import Objectives from "../components/objectives/Objectives";
import Certificates from "../components/certificates/Certificates";
import Map from "../components/map/Map";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Header />
      <Asistance />
      <Worklist />
      <Objectives />
      <Certificates />
      <News/>
      <Map />
    </>
  );
};

export default Home;

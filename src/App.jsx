import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Preguntas } from "./components/preguntas";
import { Nosotros } from "./components/nosotros";
import { Productos } from "./components/productos";
import { Galeria } from "./components/galeria";
import { Testimonios } from "./components/testimonios";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Nosotros data={landingPageData.Nosotros} />
      {/* <Galeria data={landingPageData.Galeria} /> */}
      <Productos data={landingPageData.Productos} />
      <Testimonios data={landingPageData.Testimonios} />
      <Preguntas data={landingPageData.Preguntas} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

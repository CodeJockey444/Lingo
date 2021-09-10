import React, { useState } from "react";
import Banner from "./banner";
import Navbar from "./Navbar";
import Dictionary from "./Dicitionary";
import "../styles/main.css";
import About from "./about";

const App = () => {
  const [Dark, setDark] = useState(false);
  const audio = (text) => {
    const webAudio = new SpeechSynthesisUtterance(text);
    webAudio.volume=1;
    webAudio.speed = 0.6;
    webAudio.pitch = 0.5;
    setTimeout(() => {
      speechSynthesis.speak(webAudio);
    }, 250);
  };
  const DarkStatus = (darkStat) => {
    setDark(darkStat);
  };
  return (
    <div className={Dark ? `darkBg` : ``}>
      <Navbar audio={audio} DarkStatus={DarkStatus} />
      <Banner
        header="Lingo"
        tagline="The Super Smart dictionary"
        reqTag={true}
      />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5f0a87"
          fillOpacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,218.7C672,224,768,256,864,240C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Dictionary />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5f0a87"
          fillOpacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,218.7C672,224,768,256,864,240C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <About />
      <div className="container-fluid bg-dark text-secondary p-5">
        <p className="text-center">
          &copy; All rights reserved .{" "}
          <a
            href="https://github.com/CodeJockey444/Lingo/blob/master/LICENSE"
            rel="noreferrer"
            target="_blank"
          >
            View license
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { ReactComponent as SVG } from "./Img.svg";

import "aos/dist/aos.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="row" id="about">
        <div className="col-sm-12 col-lg-6 py-0 px-5 d-flex justify-content-center flex-column" data-aos="fade-right">
          <h1 className="display-2 text-center">A Smart dictionary</h1>
          <hr />
          <p>
            Have you always staggered for meanings of words like i did and spent hours browsing the dictionary for it,just like me.Well,I have good news for you,you don't have to do that anymore.
          </p>
          <p>
            With Lingo you can immediately find meanings and even learn how to pronounce it(a web app built for tablets and computers in design).A big shout out to <a href="https://dictionaryapi.dev/">Dictionary API</a> for the database and <a href="https://github.com/CodeJockey444/Lingo/blob/master/LICENSE">MIT</a>(for the license).Without them this web application would'nt really have been possible.
          </p>
          <a className="btn btn-block btn-lg text-white pbg" href="#dictionary">Go</a>
        </div>
        <div className="col-sm-12 col-lg-6 p-4" data-aos="fade-left">
          <SVG className="img-fluid" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

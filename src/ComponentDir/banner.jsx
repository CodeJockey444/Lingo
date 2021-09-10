import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = ({ header, tagline, reqTag }) => {
  useEffect(() => {
    Aos.init({ easing: "ease-in" });
  }, []);
  return (
    <div className="container-fluid text-white banner p-5" id="banner-parent">
      <h1
        className="display-1 text-center"
        data-aos="fade-left"
        data-aos-anchor="#banner-parent"
      >
        {header}
      </h1>
      {reqTag ? (
        <p
          className="text-center "
          data-aos="fade-right"
          data-aos-anchor="#banner-parent"
        >
          {tagline}
        </p>
      ) : null}
    </div>
  );
};

export default Banner;

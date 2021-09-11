import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as SearchSVG } from "./search.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Core from "./core";

const Dictionary = ({audio}) => {

  const [Search, setSearch] = useState("");
  let [globalData, setGlobalData] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalData(
      await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${Search}`
      )
    );
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="p-5" id="dictionary">
      <h1 className="text-center display-1" data-aos="zoom-in">
        Dictionary
      </h1>
      <form
        className="m-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-group mb-3" data-aos="fade-up">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={Search}
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <div className="input-group-append">
            <button className="btn pbg" type="submit">
              <i className="bi bi-search text-white"></i>
            </button>
          </div>
        </div>
      </form>
      <div data-aos="fade-up">
        {globalData.length !== 0 ? (
          <Core data={globalData} audio={audio} val={Search}/>
        ) : (
          <SearchSVG
            className="img-fluid mx-auto d-block"
            style={{ height: "70vh", width: "60vw" }}
          />
        )}
      </div>
    </div>
  );
};

export default Dictionary;

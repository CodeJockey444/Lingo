import React, { useState, } from "react";

const Navbar = ({ audio, DarkStatus }) => {
  const [Dark, setDark] = useState(true);
  const [Liked, setLiked] = useState(false);

  const handleDark = (e) => {
    e.preventDefault();
    setDark(!Dark);
    DarkStatus(Dark);
  };
  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!Liked);
    if (Liked===false) {
      audio("Thank you");
    }
  };
  return (
    <nav className="navbar navbar-expand-sm  justify-content-end p-2">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <a
            className="nav-link"
            href="/"
            onClick={(e) => {
              handleDark(e);
            }}
          >
            <i
              className={Dark ? `bi bi-cloud-sun i` : `bi bi-cloud-moon-fill i`}
            ></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/CodeJockey444/Lingo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github i"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            onClick={(e) => {
              handleLike(e);
            }}
          >
            <i className={Liked ? `bi bi-heart-fill i` : `"bi bi-heart i`}></i>
            <span className="badge badge-pill bg-dark text-white">{}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

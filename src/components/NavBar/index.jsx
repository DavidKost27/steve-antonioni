import React from "react";
import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function NavBar() {
  const [home, setHome] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  //   useEffect(() => {
  //     const homeState = useRef(home);
  //     console.log("hello");
  //   }, []);

  const homeClickHandler = () => {
    setHome(true);
    setPortfolio(false);
    setAbout(false);
    setContact(false);
  };
  const portfolioClickHandler = () => {
    setHome(false);
    setPortfolio(true);
    setAbout(false);
    setContact(false);
  };
  const aboutClickHandler = () => {
    setHome(false);
    setPortfolio(false);
    setAbout(true);
    setContact(false);
  };
  const contactClickHandler = () => {
    setHome(false);
    setPortfolio(false);
    setAbout(false);
    setContact(true);
  };
  return (
    <div className="nav-bar">
      <Link
        to="/"
        onClick={homeClickHandler}
        className={`nav-bar__path ${home ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/portfolio/"
        onClick={portfolioClickHandler}
        className={`nav-bar__path ${portfolio ? "active" : ""}`}
      >
        Portfolio
      </Link>
      <Link
        to="/about/"
        onClick={aboutClickHandler}
        className={`nav-bar__path ${about ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        to="/contact/"
        onClick={contactClickHandler}
        className={`nav-bar__path ${contact ? "active" : ""}`}
      >
        Contact
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

export default function PortfolioNav() {
  return (
    <div className="portfolio-nav">
      {/* This Is How You Link */}
      <div className="container">
        <Link
          className="container__option"
          to="/portfolio/"
          activeStyle={{ backgroundColor: "black", color: "white" }}
        >
          Film
        </Link>
        <Link
          className="container__option"
          to="/portfolio/digital/"
          activeStyle={{ backgroundColor: "black", color: "white" }}
        >
          Digital
        </Link>
        <Link
          className="container__option"
          to="/portfolio/video/"
          activeStyle={{ backgroundColor: "black", color: "white" }}
        >
          Video
        </Link>
      </div>
    </div>
  );
}

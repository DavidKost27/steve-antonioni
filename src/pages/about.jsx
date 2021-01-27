import * as React from "react";
import "./styles/about.scss";
// import { Link } from "gatsby";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="about">
      <title>Steve Antonioni - About</title>
      <TopBar />
      <div className="about-paragraph">
        <header className="about-paragraph__header">About - Steve</header>
        <div className="about-paragraph__location">
          Located in Toronto, Ontario
        </div>
        <div className="about-paragraph__info">
          Steve is a passionate photographer and videographer who avidly seeks
          to diversify his work. From content creation to post production, he
          believes that every part of the process requires the utmost attention
          to detail in order to create unique and contemporary projects. With
          experience in the film and digital realm, as well as with video and
          photo editing, Steve's integrative skills allow for exploration and
          consistency throughout.
        </div>

        <img
          className="about-paragraph__img-about"
          src="https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/120825948_343562370053555_1728797159540256019_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jqZrjkBM3qgAX-bEQcP&tp=1&oh=8ee178017ef791f7434196ee64c73f1a&oe=60391EAF"
          alt="Steve standing in the forest with a camera hanging on his nech from a camera strap."
        />
      </div>

      {/* This Is How You Link */}
      {/* <Link to="/">Home</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/about/">About</Link> */}
      {/*  */}

      <NavBar />
    </main>
  );
};

export default IndexPage;

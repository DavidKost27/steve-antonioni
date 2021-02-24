import * as React from "react";
import "./styles/about.scss";

// Framer motion
import { motion } from "framer-motion";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="about">
      <title>Steve Antonioni - About</title>
      <TopBar />
      <motion.div
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="about-paragraph__header">About - Steve</header>

        <div className="about-paragraph__content-wrapper">
          <div>
            <div className="about-paragraph__content-wrapper__location">
              Located in Toronto, Ontario
            </div>
            <div className="about-paragraph__content-wrapper__info">
              Steve is a passionate photographer and videographer who avidly
              seeks to diversify his work. From content creation to post
              production, he believes that every part of the process requires
              the utmost attention to detail in order to create unique and
              contemporary projects. With experience in the film and digital
              realm, as well as with video and photo editing, Steve's
              integrative skills allow for exploration and consistency
              throughout.
            </div>
          </div>

          <img
            className="about-paragraph__content-wrapper__img-about"
            src="https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/120825948_343562370053555_1728797159540256019_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jqZrjkBM3qgAX-bEQcP&tp=1&oh=8ee178017ef791f7434196ee64c73f1a&oe=60391EAF"
            alt="Steve standing in the forest with a camera hanging on his nech from a camera strap."
          />
        </div>
      </motion.div>

      <NavBar />
    </main>
  );
};

export default IndexPage;

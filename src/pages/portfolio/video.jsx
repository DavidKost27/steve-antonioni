import React from "react";
import "./styles/video.scss";

import TopBar from "../../components/TopBar";
import PortfolioNav from "../../components/PortfolioNav";
import NavBar from "../../components/NavBar";

export default function Video() {
  return (
    <div className="video">
      <title>Steve Antonioni - Portfolio</title>
      <TopBar />
      <div className="videos-container">
        <iframe
          src="https://player.vimeo.com/video/320336628?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
          frameborder="0"
          allowfullscreen=""
          scrolling="no"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/320354796?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
          frameborder="0"
          allowfullscreen=""
          scrolling="no"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/320950267?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
          frameborder="0"
          allowfullscreen=""
          scrolling="no"
        ></iframe>
      </div>
      <PortfolioNav />
      <NavBar />
    </div>
  );
}

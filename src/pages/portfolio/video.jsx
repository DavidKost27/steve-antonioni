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
      <div className="videos-container-parent">
        <div className="videos-container-outerWrapper">
          <div className="videos-container">
            <div className="iframe-container">
              <iframe
                title="first"
                src="https://player.vimeo.com/video/320336628?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
                frameborder="0"
                allowfullscreen=""
                scrolling="no"
              ></iframe>
            </div>
            <div className="iframe-container">
              <iframe
                title="second"
                src="https://player.vimeo.com/video/320354796?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
                frameborder="0"
                allowfullscreen=""
                scrolling="no"
              ></iframe>
            </div>
            <div className="iframe-container">
              <iframe
                title="therd"
                src="https://player.vimeo.com/video/320950267?title=0&byline=0&portrait=0&color=ffffff&api=1&autoplay=0"
                frameborder="0"
                allowfullscreen=""
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <PortfolioNav />
      <NavBar />
    </div>
  );
}

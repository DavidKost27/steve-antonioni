import React from "react";

import TopBar from "../../components/TopBar";
import PortfolioNav from "../../components/PortfolioNav";
import NavBar from "../../components/NavBar";

export default function Video() {
  return (
    <div>
      <title>Steve Antonioni - Portfolio</title>
      <TopBar />
      <div>Video</div>

      <iframe
        src="https://player.vimeo.com/video/320336628?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;api=1&amp;autoplay=1"
        allowfullscreen=""
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>

      <PortfolioNav />
      <NavBar />
    </div>
  );
}

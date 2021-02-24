import React, { useState } from "react";
import "./styles.scss";
import YouTubeLogo from "../../assets/icons/youtube-icon.svg";

// Framer motion
import { motion } from "framer-motion";

export default function YoutubeCard(props) {
  const subscribersNumber = parseInt(props.stats.subscribers).toLocaleString();
  const videosNumber = parseInt(props.stats.videos).toLocaleString();

  const variants = {
    phone_hidden: {
      x: "-100vw",
    },
    phone_vissible: {
      x: "0",
    },
    web_hidden: {
      y: "100vh",
    },
    web_vissible: {
      y: "0",
    },
  };

  const screenWidth = window.screen.width;

  return (
    <motion.div
      className="youtubeCard"
      variants={variants}
      initial={screenWidth <= 375 ? "phone_hidden" : "web_hidden"}
      animate={screenWidth <= 375 ? "phone_vissible" : "web_vissible"}
      transition={{ duration: 1.5 }}
      onClick={() =>
        window.open(
          "https://www.youtube.com/channel/UCS4ITAOQlFP9_ny2Zl5b0ig",
          "mywindow"
        )
      }
    >
      <img
        className="youtubeCard__avatar"
        src={`${props.channelAvatar}`}
        alt="YouTube Profile"
      />
      <img
        className="youtubeCard__icon"
        src={YouTubeLogo}
        alt="instagram logo"
      />
      <div className="youtubeCard__header">Cash College</div>
      <div className="stats-container">
        <div className="stats-container__subscribers">
          <div className="stats-container__subscribers__title">
            Subscribers:
          </div>
          <div className="stats-container__subscribers__number">
            {subscribersNumber}
          </div>
        </div>

        <div className="stats-container__videos">
          <div className="stats-container__videos__title">Videos:</div>
          <div className="stats-container__videos__number">{videosNumber}</div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import "./styles.scss";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

// Framer motion
import { motion } from "framer-motion";

export default function InstagramCard(props) {
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
      className="instagramCard"
      variants={variants}
      initial={screenWidth <= 375 ? "phone_hidden" : "web_hidden"}
      animate={screenWidth <= 375 ? "phone_vissible" : "web_vissible"}
      transition={{ delay: 0.4, duration: 1.5 }}
      onClick={() =>
        window.open("https://www.instagram.com/steveantonioni/", "mywindow")
      }
    >
      <img
        className="instagramCard__avatar"
        src={props.profilePic}
        alt="Instagram Profile Avatar"
      />

      <img
        className="instagramCard__icon"
        src={InstagramIcon}
        alt="instagram logo"
      />

      <a
        className="instagramCard__header"
        href="https://www.instagram.com/steveantonioni/?hl=en"
      >
        @steveantonioni
      </a>

      <div className="stats-container">
        <div className="stats-container__followers">
          <div className="stats-container__followers__title">Followers:</div>
          <div className="stats-container__followers__number">
            {props.instaStats.followers.toLocaleString()}
          </div>
        </div>

        <div className="stats-container__posts">
          <div className="stats-container__posts__title">Posts:</div>
          <div className="stats-container__posts__number">
            {" "}
            {props.instaStats.posts.toLocaleString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

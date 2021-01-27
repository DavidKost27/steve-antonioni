import React from "react";
import "./styles.scss";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

export default function InstagramCard(props) {
  return (
    <div className="instagramCard">
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
    </div>
  );
}

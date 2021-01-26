import React from "react";
import "./styles.scss";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";

export default function InstagramCard() {
  return (
    <div className="instagramCard">
      <img
        className="instagramCard__avatar"
        src="https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/128510343_1530464407142888_6159270143836007261_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=aiAFNKjpqDEAX_qL9By&tp=1&oh=d7d1260c1cf4d2f7c2a2cfc50ca8809c&oe=6037C882"
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
          <div className="stats-container__followers__number">1,997</div>
        </div>

        <div className="stats-container__posts">
          <div className="stats-container__posts__title">Posts:</div>
          <div className="stats-container__posts__number">387</div>
        </div>
      </div>
    </div>
  );
}

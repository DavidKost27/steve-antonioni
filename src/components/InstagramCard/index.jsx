import React from "react";
import "./styles.scss";

export default function InstagramCard() {
  return (
    <div className="instagramCard">
      <img
        src="https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/128510343_1530464407142888_6159270143836007261_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=aiAFNKjpqDEAX_qL9By&tp=1&oh=d7d1260c1cf4d2f7c2a2cfc50ca8809c&oe=6037C882"
        alt="Instagram Profile Avatar"
      />
      <a
        className="instagramCard__header"
        href="https://www.instagram.com/steveantonioni/?hl=en"
      >
        @steveantonioni
      </a>
    </div>
  );
}

import React from "react";
import "./styles.scss";
import YouTubeLogo from "../../assets/icons/youtube-icon.svg";

export default function YoutubeCard(props) {
  const subscribersNumber = parseInt(props.stats.subscribers).toLocaleString();
  const videosNumber = parseInt(props.stats.videos).toLocaleString();

  return (
    <div className="youtubeCard">
      <img
        className="youtubeCard__avatar"
        src={`${props.channelAvatar}`}
        alt="YouTube Profile Picture"
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
    </div>
  );
}

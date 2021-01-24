import React from "react";
import "./styles.scss";

export default function InfoCard(props) {
  const subscribersNumber = parseInt(props.stats.subscribers).toLocaleString();
  const videosNumber = parseInt(props.stats.videos).toLocaleString();

  return (
    <div className="infoCard">
      <img src={`${props.channelAvatar}`} alt="YouTube Profile Picture" />
      <div className="infoCard__header">Cash College</div>
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

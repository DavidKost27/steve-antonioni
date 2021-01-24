import React from "react";
import "./styles.scss";

export default function InfoCard(props) {
  return (
    <div className="infoCard">
      <img src={`${props.avatar}`} alt="Image Goes Here" />
      <div className="infoCard__header">Cash College</div>
      <div className="stats-container">
        <div className="stats-container__subscribers">
          <div className="stats-container__subscribers__title">
            Subscribers:
          </div>
          <div className="stats-container__subscribers__number">40,000</div>
        </div>

        <div className="stats-container__videos">
          <div className="stats-container__videos__title">Videos:</div>
          <div className="stats-container__videos__number">40</div>
        </div>
      </div>
    </div>
  );
}

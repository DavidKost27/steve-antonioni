import React from "react";
import "./styles.scss";

export default function InfoCard(props) {
  return (
    <div className="InfoCard">
      <img src={`${props.avatar}`} alt="Image Goes Here" />
      This Is A Card
    </div>
  );
}

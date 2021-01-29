import React from "react";
import "./styles.scss";
import Udemy from "../../assets/icons/udemy.svg";

export default function UdemyCard() {
  return (
    <div
      className="udemyCard"
      onClick={() =>
        window.open(
          "https://www.udemy.com/course/cashcollege-freedom/?referralCode=87DE79C147141BEF7DEB",
          "mywindow"
        )
      }
    >
      <img
        className="udemyCard__avatar"
        src="https://img-a.udemycdn.com/course/240x135/3540206_00ec.jpg?oEw4iDuHznKDY3RpW-LJvRd2GlMojTRAYFRSgzh3xkTQRLaFDj-dtUBYUaZSfC8AxwVgWvhmXRm1h37oGFIqa03UxDkVJta2iV5FF-1HZUTK4kl_JP5voweVT74odg"
        alt="YouTube Profile Picture"
      />
      <img className="udemyCard__icon" src={Udemy} alt="udemy logo" />
      <div className="udemyCard__header">
        Become Financially <br /> Independent and <br /> Retire Early
      </div>
    </div>
  );
}

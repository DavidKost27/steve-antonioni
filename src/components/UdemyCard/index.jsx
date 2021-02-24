import React from "react";
import "./styles.scss";
import Udemy from "../../assets/icons/udemy.svg";

// Framer motion
import { motion } from "framer-motion";

export default function UdemyCard() {
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
      className="udemyCard"
      variants={variants}
      initial={screenWidth <= 375 ? "phone_hidden" : "web_hidden"}
      animate={screenWidth <= 375 ? "phone_vissible" : "web_vissible"}
      transition={{ delay: 0.8, duration: 1.5 }}
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
        alt="Udemy Course Preview"
      />
      <img className="udemyCard__icon" src={Udemy} alt="udemy logo" />
      <div className="udemyCard__header">
        Become Financially <br /> Independent and <br /> Retire Early
      </div>
    </motion.div>
  );
}

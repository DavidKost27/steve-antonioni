import React, { useEffect } from "react";
import "./styles.scss";
import Udemy from "../../assets/icons/udemy.svg";
import { StaticImage } from "gatsby-plugin-image";

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

  let screenWidth;

  useEffect(() => {
    if (typeof window !== undefined) {
      screenWidth = window.screen.width;
    }
  }, []);

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
      <StaticImage
        className="instagramCard__avatar"
        src="../../assets/images/udemy-img.PNG"
        alt="udemy Course preview"
      />
      <img className="udemyCard__icon" src={Udemy} alt="udemy logo" />
      <div className="udemyCard__header">
        Become Financially <br /> Independent and <br /> Retire Early
      </div>
    </motion.div>
  );
}

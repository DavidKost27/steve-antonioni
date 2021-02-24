import * as React from "react";
import "./styles/contact.scss";

// Framer motion
import { motion } from "framer-motion";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="contact">
      <title>Steve Antonioni - Contact</title>
      <TopBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="contact__header">Get in Touch</div>

          <div className="contact__parah">
            Interested in working together or have a question ? <br />
            Feel free to drop me a line and I will get back shortly.
          </div>

          <div className="contact__call-to-action">
            Shoot me an email by pressing the contact button below.
          </div>
        </div>

        <div className="contact__email">steveantonioni@gmail.com</div>

        <a className="contact__btn" href="mailto:davidkost1999@gmail.com">
          Contact Me
        </a>
      </motion.div>

      <NavBar />
    </main>
  );
};

export default IndexPage;

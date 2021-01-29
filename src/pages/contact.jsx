import * as React from "react";
import "./styles/contact.scss";
// import { Link } from "gatsby";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="contact">
      <title>Steve Antonioni - Contact</title>
      <TopBar />
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
      {/* This Is How You Link */}
      {/* <Link to="/">Home</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/contact/">Contact</Link> */}
      {/*  */}

      <NavBar />
    </main>
  );
};

export default IndexPage;

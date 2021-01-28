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
        <div>Get in Touch</div>

        <div>
          Interested in working together or have a question? Feel free to drop
          me a line and I will get back shortly.
        </div>

        <div>
          Shoot me an email or send me a direction message through the field
          below.{" "}
        </div>
      </div>

      <div>Email: steveantonioni@gmail.com</div>

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

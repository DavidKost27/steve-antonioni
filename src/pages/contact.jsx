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
      <div>Contact</div>

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

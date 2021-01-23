import * as React from "react";
import "./styles/index.scss";
import { Link } from "gatsby";

import TopBar from "../components/TopBar";

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
    </main>
  );
};

export default IndexPage;

import * as React from "react";
import "./styles/portfolio.scss";
// import { Link } from "gatsby";

import TopBar from "../components/TopBar";

const IndexPage = () => {
  return (
    <main className="portfolio">
      <title>Steve Antonioni - Portfolio</title>
      <TopBar />

      <div>Porfolio</div>

      {/* This Is How You Link */}
      {/* <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link> */}
      {/*  */}
    </main>
  );
};

export default IndexPage;

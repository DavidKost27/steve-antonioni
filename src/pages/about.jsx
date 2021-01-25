import * as React from "react";
import "./styles/index.scss";
// import { Link } from "gatsby";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <main className="about">
      <title>Steve Antonioni - About</title>
      <TopBar />
      <div>About</div>

      {/* This Is How You Link */}
      {/* <Link to="/">Home</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/about/">About</Link> */}
      {/*  */}

      <NavBar />
    </main>
  );
};

export default IndexPage;

import * as React from "react";
import "./styles/index.scss";
import { Link } from "gatsby";

import TopBar from "../components/TopBar";
import InfoCard from "../components/InfoCard";

const IndexPage = () => {
  return (
    <main className="home">
      <title>Home Page</title>
      <TopBar />
      <header>Creator & Educator</header>

      <InfoCard />
      {/* 
      <InfoCard />

      <InfoCard /> */}

      {/* This Is How You Link */}
      {/* <Link to="/portfolio/">Portfolio</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link> */}
      {/*  */}
    </main>
  );
};

export default IndexPage;

import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/index.scss";
// import { Link } from "gatsby";
import axios from "axios";

import TopBar from "../components/TopBar";
import InfoCard from "../components/InfoCard";

const IndexPage = () => {
  const [stats, setStats] = useState({
    Subscribers: 0,
    Videos: 0,
  });
  const apiRequestHandler = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCS4ITAOQlFP9_ny2Zl5b0ig&key=${process.env.GATSBY_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        if (response.data.items) {
          const channelStats = response.data.items[0].statistics;
          const { subscriberCount, videoCount } = channelStats;
          setStats({
            Subscribers: subscriberCount,
            Uploaded_Videos: videoCount,
          });
        }
      })
      .catch((error) => {
        console.log("API-request: Something Went Wrong");
      });
  };
  useEffect(() => {
    apiRequestHandler();
    return () => {
      console.log("Hello");
    };
  }, []);
  return (
    <main className="home">
      <title>Home Page</title>
      <TopBar />
      <header>Creator & Educator</header>

      <InfoCard stats={stats} />
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

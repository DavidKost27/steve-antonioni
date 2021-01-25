import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/index.scss";
// import { Link } from "gatsby";
import axios from "axios";

import TopBar from "../components/TopBar";
import InfoCard from "../components/InfoCard";
import InstagramCard from "../components/InstagramCard";

const IndexPage = () => {
  const [channelAvatar, setChannelAvatar] = useState("null");
  const [stats, setStats] = useState({
    subscribers: 0,
    videos: 0,
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
            subscribers: subscriberCount,
            videos: videoCount,
          });
          setChannelAvatar(
            response.data.items[0].snippet.thumbnails.default.url
          );
          console.log("David Is dog backwards");
        }
      })
      .catch((error) => {
        console.log("API-request: Something Went Wrong");
      });
  };
  useEffect(() => {
    apiRequestHandler();
  }, []);
  //

  //
  return (
    <main className="home">
      <title>Home Page</title>
      <TopBar />
      <header>Creator & Educator</header>

      <InfoCard stats={stats} channelAvatar={channelAvatar} />
      <InstagramCard />
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

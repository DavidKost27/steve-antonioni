import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/index.scss";
// import { Link } from "gatsby";
import axios from "axios";

import TopBar from "../components/TopBar";
import YoutubeCard from "../components/YoutubeCard";
import InstagramCard from "../components/InstagramCard";
import UdemyCard from "../components/UdemyCard";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  const [channelAvatar, setChannelAvatar] = useState("null");
  const [stats, setStats] = useState({
    subscribers: 0,
    videos: 0,
  });
  const youtubeApiRequest = () => {
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
        }
      })
      .catch((error) => {
        console.log("API-request: Something Went Wrong");
      });
  };

  //

  // Instagram API call
  const [profilePic, setProfilePic] = useState("null");
  const [instaStats, setInstaStats] = useState({
    followers: 0,
    posts: 0,
  });

  const instagramApiRequest = () => {
    axios
      .get(`https://www.instagram.com/steveantonioni/channel/?__a=1`)
      .then((response) => {
        const followers = response.data.graphql.user.edge_followed_by.count;
        const posts =
          response.data.graphql.user.edge_owner_to_timeline_media.count;

        setProfilePic(response.data.graphql.user.profile_pic_url);
        setInstaStats({
          followers: followers,
          posts: posts,
        });
      })
      .catch((error) => {
        console.log("API-request: Something Went Wrong");
      });
  };

  // Call API on page load
  useEffect(() => {
    youtubeApiRequest();
    instagramApiRequest();
  }, []);
  //
  return (
    <main className="home">
      <title>Steve Antonioni - Home</title>
      <TopBar />
      <header>Creator & Educator</header>

      <YoutubeCard stats={stats} channelAvatar={channelAvatar} />

      <InstagramCard profilePic={profilePic} instaStats={instaStats} />

      <UdemyCard />

      <NavBar />
    </main>
  );
};

export default IndexPage;

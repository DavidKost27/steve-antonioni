import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/index.scss";
// import { Link } from "gatsby";
import axios from "axios";

// Framer motion
import { motion } from "framer-motion";

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
  // const [profilePic, setProfilePic] = useState("null");
  // const [instaStats, setInstaStats] = useState({
  //   followers: 0,
  //   posts: 0,
  // });

  // let instagramRetryCall = 15;

  // const instagramApiRequest = () => {
  //   if (instagramRetryCall > 0) {
  //     axios
  //       .get(
  //         `https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/245513770_403947274561801_2564348838204630652_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_ohc=vUR_StfoUdgAX9W346O&edm=ABfd0MgBAAAA&ccb=7-4&oh=3fdf8e698de80adf89d1a3a100e3e015&oe=616C9E9E&_nc_sid=7bff83`
  //       )
  //       .then((response) => {
  //         instagramRetryCall = 0;
  //         const followers = response.data.graphql.user.edge_followed_by.count;
  //         const posts =
  //           response.data.graphql.user.edge_owner_to_timeline_media.count;

  //         setProfilePic(response.data.graphql.user.profile_pic_url);
  //         setInstaStats({
  //           followers: followers,
  //           posts: posts,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("API-request: Something Went Wrong");
  //         instagramApiRequest();
  //       });
  //   }
  // };

  // Call API on page load
  useEffect(() => {
    youtubeApiRequest();
    // instagramApiRequest();
  }, []);
  //
  return (
    <main className="home">
      <title>Steve Antonioni - Home</title>
      <TopBar />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Creator & Educator
      </motion.header>

      <div className="home__cards-container">
        <YoutubeCard stats={stats} channelAvatar={channelAvatar} />

        <InstagramCard />

        <UdemyCard />
      </div>

      <NavBar />
    </main>
  );
};

export default IndexPage;

import React from "react";
import Discover from "../../components/Discover";
import Homebox from "../../components/Homebox";
import Playlist from "../../components/Playlistbox";

import Verticalline from "../../components/Verticalline";

const Homepage = () => {
  return (
    <div className="Container">
      <Discover />

      <Homebox />

      <Verticalline/>

      <Playlist />

      <Verticalline />
    </div>
  );
};

export default Homepage;

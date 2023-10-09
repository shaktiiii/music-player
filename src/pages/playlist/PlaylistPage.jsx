import React from "react";

import Homebox from "./Homebox";
import Playlist from "./Playlistbox";

import Verticalline from "./Verticalline";
import NewPlaylist from "./Addnewplaylist";

const PlaylistPage = () => {
  return (
    <div className="Container">
      <NewPlaylist />

      <Homebox />

      <Verticalline />

      <Playlist />

      <Verticalline />
    </div>
  );
};

export default PlaylistPage;

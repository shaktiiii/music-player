
import React from "react";
import { Link } from 'react-router-dom';
import PlaylistCard from "./PlaylistCard";


function Playlist() {
  return (
    <>
      <div className="playlist">
     
            
      <Link to="/Newplaylist"> + Add new playlist</Link>
      <PlaylistCard/>
         
        
      </div>
    </>
  );
}

export default Playlist;

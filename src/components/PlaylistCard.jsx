import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlaylistCard = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch playlist data from local storage
    const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
    setPlaylists(storedPlaylists);
  }, []);

  return (
    <div className="playlist-container">
      {playlists.map((playlist, index) => (
        <Link
          key={index}
          to={{
            pathname: '/playlist-details',
            state: {
              playlistName: playlist.playlistName,
              photoUrl: playlist.photoUrl,
              playlistSongs: playlist.playlistSongs,
            },
          }}
          className="playlist-card-link"
        >
          <div className="playlist-card">
            <div className="playlist-image">
              <img src={playlist.photoUrl} alt="Playlist Cover" />
            </div>
            <div className="playlist-details">
              <h1>{playlist.playlistName}</h1>
            
              
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlaylistCard;

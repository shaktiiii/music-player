import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Homebox from "../../components/Homebox";
import Playlist from "../../components/Playlistbox";
import Verticalline from "../../components/Verticalline";

function NewPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [authData, setAuthData] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [isSongAdded, setIsSongAdded] = useState(false); // Added state for visual feedback
  const navigate = useNavigate();

  const addSongToPlaylist = (song) => {
    setPlaylistSongs([...playlistSongs, { name: song.name, image: song.album.images[0].url }]);
    setIsSongAdded(true); // Set to true for visual feedback
    setTimeout(() => {
      setIsSongAdded(false); // Reset after a short delay
    }, 2000);
  };
//  function to add playlist in local storage 
const savePlaylistToLocalStorage = (playlistName, photoUrl, playlistSongs) => {
  const existingPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];

  const newPlaylist = {
    playlistName,
    photoUrl,
    playlistSongs,
  };

  existingPlaylists.push(newPlaylist);
  localStorage.setItem('playlists', JSON.stringify(existingPlaylists));
};
  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    const songsWithNamesAndImages = playlistSongs.map(song => ({image: song.image , name: song.name }));
    savePlaylistToLocalStorage(playlistName, photoUrl, songsWithNamesAndImages);
    navigate('/playlist-details', {
      state: {
        playlistName,
        photoUrl,
        playlistSongs: songsWithNamesAndImages,
      },
    });
  };
  

  const fetchAccessToken = async () => {
    try {
      const authParameters = {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${'f7e9ef7251924469a664d8d20e8510a8'}&client_secret=${'bf478e06720f41cf82c098e64c08cb71'}`,
      };

      const authResponse = await fetch('https://accounts.spotify.com/api/token', authParameters);
      const data = await authResponse.json();

      setAuthData(data);
    } catch (error) {
      console.error('Error fetching access token:', error.message);
    }
  };

  const searchTracks = async () => {
    try {
      const searchResponse = await fetch(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.access_token}`,
          },
        }
      );

      if (!searchResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const searchData = await searchResponse.json();
      setSearchResults(searchData.tracks.items);
      setSearchResults(searchData.tracks.items.slice(0, 15)); 
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div className="overal">
      <div className="newplaylist">
        <h1>Create a New Playlist</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Playlist Name:
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              style={{ marginLeft:'50px', backgroundColor: '#960200', border: '1px solid #ccc', borderRadius: '4px', padding: '4px' }}
            />
          </label>
          <br />
          <br />
          <label>
            Photo URL:
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              style={{ width:'50vh',backgroundColor: '#960200', border: '1px solid #ccc', borderRadius: '4px', padding: '4px', marginLeft:'50px' }}
            />
          </label>
          <br />
          <br />
          <label>
            Add your songs:
          <input className="searchbar"
            type="text"
            placeholder="Search for songs..."
            style={{  marginLeft:'40px', width: '50vh',backgroundColor: '#960200', border: '1px solid #ccc', borderRadius: '4px', padding: '4px',color:'#eadaa2' }}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          </label>
          <button className="btn" type="button" onClick={searchTracks}>
            Search
          </button>
          {isSongAdded && <p style={{ color: 'green' }}>Song Added!</p>}


          {/* Display search results */}
          <ul className="results-grid">
  {searchResults.map((result, index) => (
    <li key={index} className="result-item">
      <img
        src={result.album.images[0].url}
        alt={`Album Cover for ${result.name}`}
        onClick={() => addSongToPlaylist(result)}
      />
      <span>{result.name}</span>
    </li>
  ))}
</ul>


        
         
          {/* Display added songs */}
          <ul>
            {playlistSongs.map((song, index) => (
              <li key={index} style={{ color: 'white' }}>
                <img
                  src={song.image}
                  alt={`Album Cover for ${song.name}`}
                  style={{ width: '50px', height: '50px', marginRight: '10px', marginTop:'50px' }}
                />
                {song.name}
              </li>
            ))}
          </ul>

          <button type="submit">Create Playlist</button>
        </form>
      </div>
      <div className='Container'>
        <Homebox />
        <Verticalline />
        <Playlist />
        <Verticalline />
      </div>
    </div>
  );
}

export default NewPlaylist;



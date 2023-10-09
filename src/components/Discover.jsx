import React, { useEffect, useState } from 'react';

const Discover = () => {
  const [filter, setFilter] = useState('pop');
  const [tracks, setTracks] = useState([]);
  const [authData, setAuthData] = useState(null);


  useEffect(() => {
    const fetchMusicCategories = async () => {
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
        console.error('Error fetching music categories:', error.message);
      }
    };

    fetchMusicCategories();
    const handleFilterChange = async () => {
   
      try {
        const playlistsResponse = await fetch(
          `https://api.spotify.com/v1/browse/categories/${filter}/playlists?limit=1`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authData.access_token}`,
            },
          }
        );
  
        if (!playlistsResponse.ok) {
          throw new Error('Network response was not ok');
        }
  
        const playlistsData = await playlistsResponse.json();
        const playlist = playlistsData.playlists.items[0];
  
        const tracksResponse = await fetch(playlist.tracks.href, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.access_token}`,
          },
        });
  
        if (!tracksResponse.ok) {
          throw new Error('Error fetching tracks');
        }
  
        const tracksData = await tracksResponse.json();
        setTracks(tracksData.items);
      } catch (error) {
        console.error('Error fetching tracks:', error.message);
      }
    }; handleFilterChange()
  }, []);

  const handleFilterChange = async (newFilter) => {
    setFilter(newFilter);
    try {
      const playlistsResponse = await fetch(
        `https://api.spotify.com/v1/browse/categories/${newFilter}/playlists?limit=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.access_token}`,
          },
        }
      );

      if (!playlistsResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const playlistsData = await playlistsResponse.json();
      const playlist = playlistsData.playlists.items[0];

      const tracksResponse = await fetch(playlist.tracks.href, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.access_token}`,
        },
      });

      if (!tracksResponse.ok) {
        throw new Error('Error fetching tracks');
      }

      const tracksData = await tracksResponse.json();
      setTracks(tracksData.items);
    } catch (error) {
      console.error('Error fetching tracks:', error.message);
    }
  };

  return (
    <>
      <div className="discover">
        <p>Discover {filter}</p>
      </div>
      <div className="container mx-auto my-8">
        <div className="custom-dropdown">
          <select
            className="p-10 border rounded"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            style={{ backgroundColor: '#ce6c47', color: 'white',  position: 'fixed' }}
          >
            <option style={{ backgroundColor: '#ce6c47' }} value="pop">
              Pop
            </option>
            <option style={{ backgroundColor: '#ce6c47' }} value="hiphop">
              Hip-Hop
            </option>
           
            <option style={{ backgroundColor: '#ce6c47' }} value="jazz">
              Jazz
            </option>
            <option style={{ backgroundColor: '#ce6c47' }} value="country">
              Country
            </option>
            <option style={{ backgroundColor: '#ce6c47' }} value="rock">
              Rock
            </option>
           
          </select>
        </div>

   

        <div className="songcard">
  {tracks.map((track) => (
    <div key={track.track.id} className="track-card">
      <div className='track-info'>
        <div className="info-container">
          <img
            src={track.track.album.images[0].url}
            alt={`${track.track.name} Album Cover`}
            className="track-image"
          />
          <div className="text-container">
            <p className="track-name">{track.track.name}</p>
            <p className="artist-name">{track.track.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>











      </div>
    </>
  );
};

export default Discover;


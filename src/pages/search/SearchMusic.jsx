import React, { useEffect, useState } from "react";

const SearchMusic = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParameters = {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=client_credentials&client_id=${"f7e9ef7251924469a664d8d20e8510a8"}&client_secret=${"bf478e06720f41cf82c098e64c08cb71"}`,
        };

        const authResponse = await fetch(
          "https://accounts.spotify.com/api/token",
          authParameters
        );
        const data = await authResponse.json();

        setAuthData(data);
      } catch (error) {
        console.error("Error fetching access token:", error.message);
      }
    };

    fetchAccessToken();
  }, []);

  const searchTracks = async () => {
    try {
      const searchResponse = await fetch(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authData.access_token}`,
          },
        }
      );

      if (!searchResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const searchData = await searchResponse.json();
      setSearchResults(searchData.tracks.items);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Search for Music</h1>
        <input
          type="text"
          placeholder="Search for songs..."
          style={{ width: "100vh" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn" onClick={searchTracks}>
          Search
        </button>
      </div>

      <div className="songdeets">
        <div className="song-card">
          {searchResults.map((track) => (
            <div key={track.id} className="track-card">
              <div className="track-info">
                <div className="info-container">
                  <img
                    src={track.album.images[0].url}
                    alt={`${track.name} Album Cover`}
                    className="track-image"
                  />
                  <div className="text-container">
                    <p className="track-name">{track.name}</p>
                    <p className="artist-name">
                      {track.artists.map((artist) => artist.name).join(", ")}
                    </p>
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

export default SearchMusic;

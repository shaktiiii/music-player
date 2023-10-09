import React from "react";

function Profile({ profileData }) {
  return (
    <div className="profile">
      <img src={profileData.image} alt="Profile" />
      <h2>{profileData.name}</h2>
      <p>ID: {profileData.id}</p>
    </div>
  );
}

export default Profile;

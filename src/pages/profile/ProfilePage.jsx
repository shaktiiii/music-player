import React, { useState } from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    id: "12345",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = (newData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1 className="header">Profile Page</h1>
      {isEditing ? (
        <EditProfile profileData={profileData} saveChanges={saveChanges} />
      ) : (
        <Profile profileData={profileData} />
      )}
      <button onClick={toggleEdit}>
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>
    </div>
  );
};

export default ProfilePage;

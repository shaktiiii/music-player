import React, { useState } from "react";

function EditProfile({ profileData, saveChanges }) {
  const [editedData, setEditedData] = useState(profileData);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    saveChanges({ ...editedData, image: selectedImage });
  };

  return (
    <div className="edit-profile">
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onChange={handleImageChange}
      />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      <input
        type="text"
        name="name"
        value={editedData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="id"
        value={editedData.id}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}

export default EditProfile;

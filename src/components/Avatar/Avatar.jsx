import React from "react";
import "./Avatar.css"
function Avatar({ imageUrl, name }) {


 

  return (
    <div className="avatar-container">
      <img src={imageUrl} alt="Avatar" className="avatar-image" />
      <p className="avatar-name">{name}</p>
    </div>
  );
}

export default Avatar;

import React from 'react';
import './UserProfileCard.css'; 

const UserProfileCard = ({ handleClosePopup }) => {
  const userdata=JSON.parse(localStorage.getItem("User"));
  return (
    <div className="popup">
      <button className="close-button" onClick={handleClosePopup}>X</button>
      <div className="card">
        <img src='logo192.png' style={{ width: '100%' }} />
        <p className="title">User shared information</p>
        <h3>Name: {userdata.username} </h3>
        <h3>Age: {userdata.age} </h3>
        <h3>Email: {userdata.email} </h3>
      </div>
    </div>
  );
};

export default UserProfileCard;

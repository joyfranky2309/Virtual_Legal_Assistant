import React from 'react';
import '../components/Prelogchat.css';

function Prelogchat() {
  return (
    <div className="chat-container">
      <div className="chat-header bg-primary text-white p-3">
        <h5 className="mb-0">Chat with Us</h5>
      </div>
      <div className="chat-body p-3">
        {/* Messages will go here */}
      </div>
      <div className="chat-footer p-3">
        <input 
          type="text" 
          className="form-control me-2" 
          placeholder="Type your message..." 
        />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
}

export default Prelogchat;
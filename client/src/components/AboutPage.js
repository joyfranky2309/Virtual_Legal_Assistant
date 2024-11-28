import React from 'react';
import './AboutPage.css';

const teamMembers = [
  {
    name: 'ABHISHEK',
    role: 'TEAM LEAD',
    photo: 'Team lead.jpg',
    description: 'Abhishek leads the team with a passion for technology and innovation.'
  },
  {
    name: 'SRITHA',
    role: 'BACKEND-DEVELOPER',
    photo: 'ss.jpg',
    description: 'sritha is a backend wizard, ensuring everything runs smoothly.'
  },
  {
    name: 'RESHMI',
    role: 'BACKEND-DEVELOPER',
    photo: 'r.jpg',
    description: 'Reshmi specializes in creating stunning user interfaces.'
  },
  {
    name: 'SASIKAR',
    role: 'FRONTEND-DEVELOPER',
    photo:'s.jpg',
    description: 'Sasikar dedicated in writing clean and efficient code.'
  },
  
  
  {
    name: 'JOY',
    role: 'DEVELOPER',
    photo: 'j.jpg',
    description: 'Joy excels in both frontend and backend development.'
  },
 
  {
    name: 'MEGHANA',
    role: 'FRONTEND-DEVELOPER',
    photo: 'm.jpg',
    description: 'Meghana works on frontend responsible for crafting dynamic user interfaces.'
  }
];

const AboutPage = () => {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={process.env.PUBLIC_URL + `/images/${member.photo}`} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

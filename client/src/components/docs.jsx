import React from 'react';
import './docs.css';
import { Link } from 'react-router-dom';

const example = "example.pdf";
const teamMembers = [
  {
    name: 'FIR',
    role: 'Police',
    photo: 'fir.jpeg',
    description: 'A FIR (First Information Report) is a legal document filed with the police and other South Asian countries to initiate an investigation into a criminal offense.',
    link: '/fir' 
  },
  {
    name: 'RTI',
    role: 'Court',
    photo: 'rti.jpeg',
    description: 'RTI (Right to Information) is the legal right of citizens to access information held by public authorities, promoting transparency and accountability in governance.',
    link: '/rti'
  },
  {
    name: 'LICENSE',
    role: 'Court',
    photo: 'driving.jpeg',
    description: '',
    link: '/license'
  },
  {
    name: 'STAY ORDER',
    role: 'Court',
    photo: 'stay.jpeg',
    description: 'A stay order is a court-issued directive that temporarily halts the execution of a judicial proceeding or the enforcement of a court judgment or order, pending further review or appeal.',
    link: '/stay'
  },
  {
    name: 'Interlocutory Applications',
    role: 'Court',
    photo: 'rti.jpeg',
    description: 'IA is a legal request made to the court during an ongoing case, seeking a specific order or direction to address an urgent issue or matter that cannot wait until the case is resolved.',
    link: '/ia'
  },
  {
    name: 'RTI',
    role: 'Court',
    photo: 'rti.jpeg',
    description: '',
    link: '/rti'
  },
  {
    name: 'RTI',
    role: 'Court',
    photo: 'rti.jpeg',
    description: '',
    link: '/rti'
  }
];

const AboutPage = () => {
  return (
    <div className="team-section1">
      <h2>DOCS</h2>
      <div className="team-members1">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member1">
            <img src={process.env.PUBLIC_URL + `/images/${member.photo}`} alt={member.name} className="member-photo1" />
            <h3>{member.name}</h3>
            <p className="member-description1">{member.description}</p>
            <Link to={member.link}>
              <a>Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

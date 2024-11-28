import React from 'react';
import './HomePage.css';
const HomePage = () => {
  return (
    <div className="home-page">
      {/* <header className="header">
        <img src={process.env.PUBLIC_URL + `/images/${'ss.jpg'}`} alt={'image'} className='hpic' />
      </header> */}

      <section className="hero">
        <div className="hero-text">
          <h1>Expert Legal Advice at Your Fingertips</h1>
          <p>Connect with top legal professionals from the comfort of your home.</p>
          <button className="cta-button" onClick={() => window.location.href = "/chat"}>CHAT HERE</button>
        </div>
        <img src="public.jpg" className="hero-image" alt="Legal Advice" />
      </section>
      <section className="constitution-section">
        <img src="constitution of india.jpg" alt="Indian Constitution Book" className="constitution-image" />
        <div className="constitution-text">
          <h2>Indian Constitution</h2>
          <p>The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.</p>
        </div>
      </section>

      
      <section className="more">
        <h2>KNOW MORE ABOUT CONSTITUTION</h2>
        <div className="india-container">
          <div className="india-card">
            <img src="ambedkar.jpg" alt="Person 1" className="india-image" />
            <div className="india-name">**DR.B.R.Ambedkar**           
                    Architect of Indian Constitution</div>
            <h1>Drafted India's Constitution, ensured equality</h1>
          </div>
          <div className="india-card">
            <img src="yeswanth.jpg" alt="Person 2" className="india-image" />
            <div className="india-name">**Mr.Dhananjaya Yeswanth**
              Chief Justice of India
            </div>
            <h1>Upholds Constitution, ensures justice </h1>
          </div>
          <div className="india-card">
            <img src="dropati murmu.jpg" alt="Person 3" className="india-image" />
            <div className="india-name">**Ms.Droupadi Murmu**    President of India</div>
            <h1>Enforces laws, upholds constitutional integrity</h1>
          </div>
        </div>
      </section>


      <section id="intro" className="intro">
        <h2>WHY US</h2>
        <p>
          We provide professional legal assistance online, offering a wide range of services to help you navigate legal challenges with ease and confidence.
        </p>
      </section>

      

      <section className="references-section">
        <h2>References</h2>
        <a href="https://www.constitutionofindia.net/" target="_blank" rel="noopener noreferrer">Constitution of India - Official Website</a>
        <a href="https://indiankanoon.org/doc/237570/" target="_blank" rel="noopener noreferrer">Indian Constitution - Indian Kanoon</a>
        <a href="https://www.india.gov.in/my-government/constitution-india" target="_blank" rel="noopener noreferrer">Constitution of India - Government of India</a>
        <a href="https://instagram.com/indian_constitution" target="_blank" rel="noopener noreferrer">Instagram - Indian Constitution</a>
        <a href="https://instagram.com/indian_law" target="_blank" rel="noopener noreferrer">Instagram - Indian Law</a>
      </section>
    </div>
  );
};

export default HomePage;

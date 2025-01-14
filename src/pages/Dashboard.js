import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import OfferSection from '../components/OfferSection';
import ContactForm from '../components/ContactForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); 
    navigate("/"); 
    };
  return (
    <div>
        <button onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <ContactForm />
    </div>
  );
}

const logoutButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: "10px 15px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Dashboard

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OnboardingModal from './components/OnboardingModal/OnboardingModal';

function App() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  return (
    <div className="page">
      <Navbar />
      <Hero />
      
      {showModal && <OnboardingModal onClose={closeModal} />}
      
      {/* Lớp overlay làm mờ nền khi modal hiện lên */}
      {showModal && <div className="overlay"></div>}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OnboardingModal from './components/OnboardingModal/OnboardingModal';
import LoginModal from './components/LoginModal/LoginModal';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'login', 'onboarding', or null

  const closeModal = () => setActiveModal(null);
  const openLogin = () => setActiveModal('login');
  const openOnboarding = () => setActiveModal('onboarding');

  return (
    <div className="page">
      <Navbar onLoginClick={openLogin} /> 
      
      <Hero onStartClick={openOnboarding} />

      {/* Render the overlay and modal only if one is active */}
      {activeModal && (
        <div className="overlay" onClick={closeModal}>
          {/* stopPropagation prevents clicking the modal from closing it */}
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {activeModal === 'onboarding' && (
              <OnboardingModal onClose={closeModal} />
            )}
            {activeModal === 'login' && (
              <LoginModal onClose={closeModal} />
            )}
          </div>
        </div>
      )}

      <SearchPage></SearchPage>
    </div>
  );
}

export default App;



import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const EnterPage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-footer');
    return () => {
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <div className={`hero-section animation-container ${isActive ? 'active' : ''}`} style={{ position: "relative", height: '100vh', overflow: 'hidden' }}>
      <Image src="/AESIRCarve.png" fluid centered style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
      <div className="text-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(25, 25, 25, 0.5)', borderRadius: '0px', padding: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>

        <div >
          <img src="/AESIRLogo.png" style={{ width: "90vw", height: "40vh", objectFit: "contain" }} />
        </div>
        <p style={{ fontSize: '6.5vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', marginTop: '5px', marginBottom: '40px'}}>
          GO <span style={{ backgroundImage: 'linear-gradient(180deg, #fff, rgb(225 68 26)', WebkitBackgroundClip: 'text', color: 'transparent' }}>FAST</span>, TAKE <span style={{ backgroundImage: 'linear-gradient(180deg, #fff, rgb(225 68 26)', WebkitBackgroundClip: 'text', color: 'transparent' }}>CHANCES!</span>
        </p>
        <button onClick={() => navigate("/home")} style={{
          background: 'linear-gradient(90deg, #660000, rgb(225 68 26)',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          fontFamily: 'Anta',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          backdropFilter: 'blur(5px)',
          textDecoration: 'underline',
          border: '1px solid white',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
          }}>
          Discover Our Services
        </button>
      </div>
    </div>
  );
}

export default EnterPage;

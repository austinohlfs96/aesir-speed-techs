import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Image} from 'semantic-ui-react'

const EnterPage = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)

  return (
<div className={`hero-section animation-container ${isActive ? 'active' : ''}`} style={{ position: "relative", height: '100vh', overflow: 'hidden' }}>
  <Image src="/AESIRCarve.png" fluid centered style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
  <div className="text-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' size='small' style={{ width: "10vw", height: "auto", marginBottom: '20px' }} />
    <h1 style={{ fontSize: '6vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
      ÆSIR Speed Techs
    </h1>
    <p style={{ fontSize: '2.5vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', marginTop: '20px' }}>
      GO FAST, TAKE CHANCES!
    </p>
    <p style={{ fontSize: '1.5vw', maxWidth: '800px', fontFamily: 'Anta', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', marginTop: '20px' }}>
      Your <span style={{ fontWeight: 'bold', color: '#FF0000' }}>PREMIUM</span> destination for athletes seeking an edge through professional equipment services.
    </p>
    <button onClick={() => navigate("/home")} style={{
      marginTop: '30px',
      padding: '10px 20px',
      fontSize: '1.5vw',
      fontFamily: 'Orbitron, sans-serif',
      backgroundColor: 'rgba(255, 0, 0, 0.8)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    }}>
      Discover Our Services
    </button>
  </div>
  
</div>

  );
}

export default EnterPage;
// import React, { useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import {Image} from 'semantic-ui-react'

// const EnterPage = () => {
//   const navigate = useNavigate()
//   const [isActive, setIsActive] = useState(false)

//   useEffect(() => {
//     document.body.classList.add('no-footer');
//     return () => {
//       document.body.classList.remove('no-footer');
//     };
//   }, []);

//   return (
// <div className={`hero-section animation-container ${isActive ? 'active' : ''}`} style={{ position: "relative", height: '100vh', overflow: 'hidden' }}>
//   <Image src="/AESIRCarve.png" fluid centered style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)'  }} />
//   <div className="text-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>

//   <div style={{backgroundColor: "red", borderRadius: "50%", padding: "5px", width: "120px", height: "120px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}>
//     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" style={{width: "90px", height: "90px", objectFit: "contain",}} />
// </div>

// <h1 style={{ fontSize: '9vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', marginBottom: '0px' }}>
//       Æ<span style={{color: 'red'}}>SIR</span>
//     </h1>
//     <h1 style={{ fontSize: '9vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', marginTop: '0px' }}>
//      Speed Techs
//     </h1>
//     <p style={{ fontSize: '2.5vw', maxWidth: '800px', fontFamily: 'Anta', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', marginTop: '20px' }}>
//       Your <span style={{ fontWeight: 'bold', color: '#FF0000' }}>PREMIUM</span> destination for elite athletes seeking a competitve edge through superior equipment services.
//     </p>
//     <p style={{ fontSize: '3.5vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', marginTop: '20px' }}>
//       GO FAST, TAKE CHANCES!
//     </p>
  
//     <button onClick={() => navigate("/home")} style={{ 
//   background: 'linear-gradient(90deg, #660000, #ff5050)', 
//   color: '#fff', 
//   border: 'none', 
//   padding: '10px 20px', 
//   borderRadius: '5px', 
//   fontFamily: 'Orbitron, sans-serif', 
//   fontSize: '16px', 
//   fontWeight: 'bold', 
//   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', 
//   cursor: 'pointer', 
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   fontFamily: 'Anta'
// }}
// onMouseEnter={e => {
//   e.currentTarget.style.transform = 'scale(1.05)';
//   e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
// }}
// onMouseLeave={e => {
//   e.currentTarget.style.transform = 'scale(1)';
//   e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
// }}>
//       Discover Our Services
//     </button>
//   </div>
  
// </div>

//   );
// }

// export default EnterPage;


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

        {/* <h1 style={{ fontSize: '7vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '5px 5px 10px rgba(0, 0, 0, 0.8)', marginBottom: '20px', backgroundColor: 'black', borderRadius: '30px', border: '2px solid white', paddingLeft: '25px', paddingRight: '25px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.8)'}}>
          Æ<span style={{ color: 'red' }}>SIR</span>
        </h1>
        <h1 style={{ fontSize: '7vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '5px 5px 10px rgba(0, 0, 0, 0.8)', marginTop: '0px' }}>
          Speed Techs
        </h1> */}
        {/* <p style={{ fontSize: '2.5vw', maxWidth: '800px', fontFamily: 'Anta', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', marginTop: '5px' }}>
          Your <span style={{ fontWeight: 'bold', color: '#FF0000' }}>PREMIUM</span> destination for elite athletes seeking a competitive edge through superior equipment services.
        </p> */}
        <p style={{ fontSize: '5.5vw', fontWeight: 'bold', fontFamily: 'Anta', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', marginTop: '5px', marginBottom: '40px'}}>
          GO FAST, TAKE CHANCES!
        </p>

        <button onClick={() => navigate("/home")} style={{
          background: 'linear-gradient(90deg, #660000, #ff5050)',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          backdropFilter: 'blur(5px)',
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

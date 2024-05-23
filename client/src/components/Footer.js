import React from 'react';
import { Image } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment" style={{ zIndex: '999', padding: '1em 0' }}>
      <div className="ui container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: '10px' }}>
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' 
            alt="Valknut logo"
            style={{ width: '20px', height: '20px', marginRight: '10px' }} 
          />
          <p style={{ fontSize: "1.5vw", margin: '0' }}>ÆSIR Speed Techs © 2024</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: '10px' }}>
          <p style={{ fontSize: "1.5vw", margin: '0 10px' }}>Sponsors:</p>
          <Image 
            src='https://www.swixsport.com/siteassets/archive/logos/logo.png?width=400' 
            alt="Swix logo"
            style={{ width: '40px', height: '16px', marginRight: '10px' }} 
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <p style={{ fontSize: "1.5vw", margin: '0 10px' }}>Follow us on social media:</p>
          <a href="https://www.instagram.com/aesir_techs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="instagram icon" style={{ margin: '0 10px', fontSize: '1.5vw' }}></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="facebook icon" style={{ margin: '0 10px', fontSize: '1.5vw' }}></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="twitter icon" style={{ margin: '0 10px', fontSize: '1.5vw' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;



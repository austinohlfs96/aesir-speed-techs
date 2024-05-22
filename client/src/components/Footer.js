import React from 'react';
import { Image } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: '999' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' style={{ width: '20px', height: '20px', marginRight: '10px' }} />
          <p style={{ fontSize: "1.5vw", margin: '0' }}>ÆSIR Speed Techs © 2024</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <p style={{ fontSize: "1.5vw", margin: '0 10px' }}>Sponsors:</p>
          <Image src='https://www.swixsport.com/siteassets/archive/logos/logo.png?width=400' style={{ width: '40px', height: '16px', marginRight: '10px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <p style={{fontSize: "1.5vw", margin: '0 10px' }}>Follow us on social media:</p>
          <a href="https://www.instagram.com/aesir_techs/" target="_blank" rel="noopener noreferrer">
            <i className="instagram icon" style={{ margin: '0 10px' }}></i>
          </a>
          <i className="facebook icon" style={{ margin: '0 10px' }}></i>
          <i className="twitter icon" style={{ margin: '0 10px' }}></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;



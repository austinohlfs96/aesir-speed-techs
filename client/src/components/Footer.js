
import React from 'react';
import { Image, Input, Button } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' 
            alt="Valknut logo"
            style={logoStyle} 
          />
          <p style={textStyle}>ÆSIR Speed Techs © 2024</p>
        </div>
        <div style={sectionStyle}>
          <p style={textStyle}><strong>Sponsors:</strong></p>
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Swix_logo.png' 
            alt="Swix logo"
            style={sponsorLogoStyle} 
          />
        </div>
        <div style={sectionStyle}>
          <p style={textStyle}><strong>Quick Links:</strong></p>
          <a href="/about" style={linkStyle}>About Us</a>
          <a href="/tuningservices" style={linkStyle}>Services</a>
          <a href="/terms" style={linkStyle}>Terms of Service</a>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
        </div>
        <div style={sectionStyle}>
          <p style={textStyle}><strong>Contact Us:</strong></p>
          <p style={contactTextStyle}>Email: info@aesirtechs.com</p>
          <p style={contactTextStyle}>Phone: +123 456 7890</p>
        </div><div style={sectionStyle}>
          <p style={textStyle}><strong>Follow us on social media:</strong></p>
          <a href="https://www.instagram.com/aesir_techs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconLinkStyle}>
            <i className="instagram icon" style={iconStyle}></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={iconLinkStyle}>
            <i className="facebook icon" style={iconStyle}></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={iconLinkStyle}>
            <i className="twitter icon" style={iconStyle}></i>
          </a>
        </div>
        <div style={sectionStyle}>
          <p style={textStyle}>Subscribe to our Newsletter:</p>
          <div style={newsletterStyle}>
            <Input placeholder='Your email address' style={inputStyle} />
            <Button primary style={buttonStyle}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const footerStyle = {
  background: '#1b1c1d',
  color: '#fff',
  padding: '2em 0',
  fontFamily: 'Anta, sans-serif',
  zIndex: 999,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1em',
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '10px',
  flex: 1,
  minWidth: '200px',
};

const logoStyle = {
  width: '40px',
  height: '40px',
  marginBottom: '10px',
};

const sponsorLogoStyle = {
  width: '80px',
  height: '32px',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '1rem',
  margin: '0 0 10px 0',
};

const contactTextStyle = {
  fontSize: '0.9rem',
  margin: '0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginBottom: '5px',
  fontSize: '0.9rem',
};

const iconLinkStyle = {
  margin: '0 10px',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#fff',
  transition: 'color 0.3s ease',
};

const newsletterStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  marginRight: '10px',
};

const buttonStyle = {
  background: 'red',
  padding: '0.5em 1em',
};

export default Footer;

import React from 'react';
import { Segment, Item, Image } from 'semantic-ui-react';

const ServiceCard = ({ id, imageSrc, title, price, turnaroundTime, description }) => {
  return (
    <Segment key={id} style={cardStyle}>
      <Image src={imageSrc} size='medium' style={imageStyle} />
      <Item>
        <Item.Content style={contentStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <Item.Meta style={metaStyle}>
            <span style={labelStyle}>Price: </span> <span>${price}</span>
          </Item.Meta>
          <Item.Meta style={metaStyle}>
            <span style={labelStyle}>Average Turn Around Time: </span> <span>{turnaroundTime}</span>
          </Item.Meta>
          <Item.Description style={descriptionStyle}>
            {description}
          </Item.Description>
        </Item.Content>
      </Item>
    </Segment>
  );
};

const ServicesModal = () => {
  return (
    <div className='modal'>
      <div id="services">
        <h1 style={headerStyle}>Services</h1>
        <Segment style={segmentStyle}>
          <Item.Group>
            <ServiceCard 
              id='serviceId1' 
              imageSrc='/ProWax.jpg' 
              title='Pro Competition Wax' 
              price={75} 
              turnaroundTime='24 hours'
              description='Introducing our Pro Competition Wax: a revolutionary floor-free, multi-layer treatment meticulously crafted to optimize performance in diverse conditions. Utilizing a sophisticated blend of temperature-specific application techniques and fortified with cutting-edge base hardening additives, this wax ensures unparalleled durability and unmatched glide speed. Experience the pinnacle of performance with our Pro Competition Wax—where excellence knows no bounds.'
            />
            <ServiceCard 
              id='serviceId2' 
              imageSrc='/ProTune.jpg' 
              title='Pro Competition Edge & Wax' 
              price={100} 
              turnaroundTime='24 hours'
              description='Elevate your performance with our Pro Competition Edge and Wax service, designed to unlock the full potential of your gear. Experience precision side edge sharpening and base bevel customization at 1 or 2 degrees, offering the perfect balance between glide and control. Whether you are craving seamless playfulness or steadfast reliability, our service delivers consistent, razor-sharp edges when you need them most. Dominate the competition with unparalleled precision and reliability, courtesy of our Pro Competition Edge and Wax.'
            />
            <ServiceCard 
              id='serviceId3' 
              imageSrc='/HuckknifeGrind.jpg' 
              title='Pro Competition Tune' 
              price={150} 
              turnaroundTime='24 hours'
              description='Experience the ultimate in ski and snowboard tuning with our Pro Competition Tune service. Our expert technicians begin with meticulous p-tex base repair, ensuring a flawless foundation for your ride. Next, enjoy a stone finish grind that enhances surface smoothness to perfection. Precision edge sharpening guarantees razor-sharp edges, delivering unparalleled control on any terrain. Finally, our signature Pro Competition Wax application ensures maximum glide and speed, propelling you to the podium with unmatched performance. Elevate your game with the precision and reliability of our Pro Competition Tune—where every detail counts.'
            />
            <ServiceCard 
              id='serviceId4' 
              imageSrc='/ProE:W.jpg' 
              title='Pro Competition Full Tune' 
              price={200} 
              turnaroundTime='4 days'
              description='Elevate your performance with our Pro Competition Full Tune—a comprehensive service designed for champions. Our precision base grind and competition finish grind guarantee optimal control and speed. We restore your base to perfection with expert p-tex repair and welds. Our signature Pro Competition Wax application ensures unmatched glide and endurance. Plus, precision hand-sharpened edges deliver razor-sharp control. Conquer the slopes with confidence—choose the Pro Competition Full Tune for championship-level performance.'
            />
          </Item.Group>
        </Segment>
      </div>
    </div>
  );
};

const headerStyle = {
  color: '#FF0000',
  textAlign: 'center',
  fontFamily: 'Anta',
  backgroundColor: '#000',
  padding: '10px 20px',
  borderRadius: '10px',
  border: '2px solid #FF0000',
  width: 'fit-content',
  margin: '20px auto',
  fontSize: '2em',
};

const segmentStyle = {
  display: 'flex',
  flexFlow: 'wrap',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #111, #333)',
  padding: '40px',
  marginBottom: '60px',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
};

const cardStyle = {
  background: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
  borderRadius: '15px',
  marginBottom: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  maxWidth: '600px',
  margin: 'auto',
  transition: 'transform 0.3s ease-in-out',
  border: '1px solid #FF0000',
  hover: {
    transform: 'scale(1.05)',
  },
};

const imageStyle = {
  borderRadius: '15px',
  marginBottom: '20px',
  transition: 'transform 0.3s ease-in-out',
  boxShadow: '0 4px 8px rgba(255, 0, 0, 0.4)',
  hover: {
    transform: 'scale(1.1)',
  },
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  color: '#ffffff',
};

const titleStyle = {
  fontFamily: 'Anta',
  marginBottom: '10px',
  fontSize: '2.5em',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#FF0000',
};

const metaStyle = {
  marginBottom: '10px',
  color: '#dddddd',
  fontWeight: '300',
};

const labelStyle = {
  fontWeight: 'bold',
  color: '#FF0000',
  marginRight: '5px',
};

const descriptionStyle = {
  marginTop: '10px',
  fontSize: '1.1em',
  lineHeight: '1.6',
  color: '#d3d3d3',
};

export default ServicesModal;

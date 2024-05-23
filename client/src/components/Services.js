import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Table } from 'semantic-ui-react';
import Head from './Header';
import ServiceCard from './SerciveCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [link, setLink] = useState([])

  // useEffect(() => {
  //   const fetchServices = () => {
  //     fetch('/services')
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch services');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         setServices(data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching services:', error.message);
  //       });
  //   };
  
  //   fetchServices();
  // }, []);

  // useEffect(() => {
  //   // Log the URL when the component mounts
  //   console.log('Current URL:', window.location.href);
  
  //   // Display the hash and everything after it
  //   console.log('Hash and everything after it:', window.location.hash);
  //   setLink(window.location.href)
  
  //   const fetchServices = async () => {
  //     try {
  //       const response = await fetch('/services');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch services');
  //       }
  
  //       const data = await response.json();
  //       setServices(data); 
  //     } catch (error) {
  //       console.error('Error fetching services:', error.message);
  //     }
  //   };
  
  //   fetchServices();
  // }, []);

  

  return (
  //   <>
  //   <Head />
  //   <div className='modal'>
  //     <div id="services">
  //       <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Services</h1>
  //       <Segment style={{display: 'flex', flexFlow: 'wrap', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', marginBottom: '60px' }}>
          
  //         <Item.Group>
  //           {services.map((service) => (
  //             <Segment key={service.id} id={`service-item-${service.id}`} className={`service-item`} style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //               <Image src={service.image} size='medium' floated='left' />
  //               <Item>
  //                 <Item.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
  //                   <h1 id={`service-item-${service.id}`} style={{fontFamily: "Anta", marginBottom: '10px'}}>{service.name}</h1>
  //                   <Item.Meta>
  //                     <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price: </span> <span> ${service.price}</span>
  //                     {/* <span className='price'>{`Price: $${service.price}`}</span> */}
  //                   </Item.Meta>
  //                   <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>{service.average_turn_around}</span>
  //                   <Item.Description style={{ marginTop: '10px' }}>{service.description}</Item.Description>
  //                 </Item.Content>
  //               </Item>
  //             </Segment>
  //           ))}
  //         </Item.Group>
  //       </Segment>
  //     </div>
  //   </div>
  // </>
  <>
    <Head />
    <div className='modal'>
      <div id="services">
        {/* <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Services</h1>
        <Segment style={{display: 'flex', flexFlow: 'wrap', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', marginBottom: '60px' }}>
          
          <Item.Group> */}
              {/* <Segment key='serviceId1' id='service-item-1' style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src='/ProWax.jpg' size='medium' floated='left' />
                <Item>
                  <Item.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <h1 style={{fontFamily: "Anta", marginBottom: '10px'}}>Pro Compitition Wax</h1>
                    <Item.Meta>
                      <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price: </span> <span> $75</span>
                      
                    </Item.Meta>
                    <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>24 hours</span>
                    <Item.Description style={{ marginTop: '10px' }}>Introducing our Pro Competition Wax: a revolutionary floor-free, multi-layer treatment meticulously crafted to optimize performance in diverse conditions. Utilizing a sophisticated blend of temperature-specific application techniques and fortified with cutting-edge base hardening additives, this wax ensures unparalleled durability and unmatched glide speed. Experience the pinnacle of performance with our Pro Competition Wax—where excellence knows no bounds.</Item.Description>
                  </Item.Content>
                </Item>
              </Segment> */}
              <ServiceCard/>

              {/* <Segment key='serviceId2' style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image id='service-item-2' src='/ProTune.jpg' size='medium' floated='left' />
                <Item>
                  <Item.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <h1  style={{fontFamily: "Anta", marginBottom: '10px'}}>Pro Competition Edge & Wax</h1>
                    <Item.Meta>
                      <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price: </span> <span> $100</span>
                      <span className='price'>{`Price: $${service.price}`}</span>
                    </Item.Meta>
                    <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>24 hours</span>
                    <Item.Description  style={{ marginTop: '10px' }}>Elevate your performance with our Pro Competition Edge and Wax service, designed to unlock the full potential of your gear. Experience precision side edge sharpening and base bevel customization at 1 or 2 degrees, offering the perfect balance between glide and control. Whether you are craving seamless playfulness or steadfast reliability, our service delivers consistent, razor-sharp edges when you need them most. Dominate the competition with unparalleled precision and reliability, courtesy of our Pro Competition Edge and Wax.</Item.Description>
                  </Item.Content>
                </Item>
              </Segment>

              <Segment key='serviceId3'  style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image  src='/HuckknifeGrind.jpg' size='medium' floated='left' />
                <Item>
                  <Item.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <h1 id='service-item-3' style={{fontFamily: "Anta", marginBottom: '10px'}}>Pro Competition Tune</h1>
                    <Item.Meta>
                      <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price: </span> <span> $150</span>
                      
                    </Item.Meta>
                    <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>24 hours</span>
                    <Item.Description style={{ marginTop: '10px' }}>Experience the ultimate in ski and snowboard tuning with our Pro Competition Tune service. Our expert technicians begin with meticulous p-tex base repair, ensuring a flawless foundation for your ride. Next, enjoy a stone finish grind that enhances surface smoothness to perfection. Precision edge sharpening guarantees razor-sharp edges, delivering unparalleled control on any terrain. Finally, our signature Pro Competition Wax application ensures maximum glide and speed, propelling you to the podium with unmatched performance. Elevate your game with the precision and reliability of our Pro Competition Tune—where every detail counts.</Item.Description>
                  </Item.Content>
                </Item>
              </Segment>

              <Segment key='serviceId4'   style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image  src='/ProE:W.jpg' size='medium' floated='left' />
                <Item>
                  <Item.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <h1 id='service-item-4' style={{fontFamily: "Anta", marginBottom: '10px'}}>Pro Competition Full Tune</h1>
                    <Item.Meta>
                      <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price: </span> <span> $200</span>
                    
                    </Item.Meta>
                    <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>4 days</span>
                    <Item.Description  style={{ marginTop: '10px' }}>Elevate your performance with our Pro Competition Full Tune—a comprehensive service designed for champions. Our precision base grind and competition finish grind guarantee optimal control and speed. We restore your base to perfection with expert p-tex repair and welds. Our signature Pro Competition Wax application ensures unmatched glide and endurance. Plus, precision hand-sharpened edges deliver razor-sharp control. Conquer the slopes with confidence—choose the Pro Competition Full Tune for championship-level performance.</Item.Description>
                  </Item.Content>
                </Item>
              </Segment> */}
           
          {/* </Item.Group>
        </Segment> */}
      </div>
    </div>
  </>
  );
};

export default Services;

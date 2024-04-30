import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Table } from 'semantic-ui-react';
import Head from './Header';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
   
    const fetchServices = async () => {
      try {
        const response = await fetch('/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data = await response.json();
        setServices(data); 
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    };

   
    fetchServices();
  }, []);

  return (
    <>
    <Head />
    <div className='modal'>
      <div id="services">
        <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Services</h1>
        <Segment style={{display: 'flex', flexFlow: 'wrap', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', marginBottom: '60px' }}>
          
          <Item.Group>
            {services.map((service) => (
              <Segment key={service.id} className="service-item" style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
                <Image src={service.image} size='medium' floated='left' />
                <Item>
                  <Item.Content>
                    <h1 id={`service-item-${service.id}`} style={{fontFamily: "Anta", marginBottom: '10px'}}>{service.name}</h1>
                    <Item.Meta>
                      <span className='price' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Price:</span> <span>{service.price}</span>
                      {/* <span className='price'>{`Price: $${service.price}`}</span> */}
                    </Item.Meta>
                    <span className='stay' style={{fontWeight: 'bold', textDecoration: 'underline'}}>Average Turn Around Time:</span>  <span>{service.average_turn_around}</span>
                    <Item.Description style={{ marginTop: '10px' }}>{service.description}</Item.Description>
                  </Item.Content>
                </Item>
              </Segment>
            ))}
          </Item.Group>
        </Segment>
      </div>
    </div>
  </>
//   <>
//   <Head />
//   <div className='modal'>
//     <div id="services">
//       <Segment style={{ background: 'rgba(16, 51, 78, 0.6)' }}>
//         <h1 style={{ color: 'white' }}>Services</h1>
//         <Table celled inverted>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>Name</Table.HeaderCell>
//               <Table.HeaderCell>Price</Table.HeaderCell>
//               <Table.HeaderCell>Average Turn Around Time</Table.HeaderCell>
//               <Table.HeaderCell>Description</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             {services.map((service) => (
//               <Table.Row key={service.id}>
//                 <Table.Cell>{service.name}</Table.Cell>
//                 <Table.Cell>{`$${service.price}`}</Table.Cell>
//                 <Table.Cell>{service.average_turn_around}</Table.Cell>
//                 <Table.Cell>{service.description}<Image src={service.image} size='small' floated='left' /></Table.Cell>
//               </Table.Row>
//             ))}
//           </Table.Body>
//         </Table>
//       </Segment>
//     </div>
//   </div>
// </>
  );
};

export default Services;

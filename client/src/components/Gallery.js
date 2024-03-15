import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Modal } from 'semantic-ui-react';
import Head from './Header';

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
 

   


  return (
    <>
      <Head />
      <div className='modal'>
      <div id="services">
      <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: '100%', height: '77vh', overflow: 'auto' }}>
        <h1>Gallery</h1>
        <div className="image-grid">
       
        <Image src='/HuckknifeGrind.jpg' size='medium' centered onClick={() => handleImageClick('/HuckknifeGrind.jpg')}/>
        <Image src='/ÆSIRShop1.jpg' size='medium' centered onClick={() => handleImageClick('/ÆSIRShop1.jpg')}/>
        <Image src='/JRBaseGrind1.jpg' size='medium' centered onClick={() => handleImageClick('/JRBaseGrind1.jpg')}/>
        <Image src='/ScottAndJR.jpg' size='medium' centered onClick={() => handleImageClick('/ScottAndJR.jpg')}/>
        <Image src='/ScottJRBueaxDew.jpg' size='medium' centered onClick={() => handleImageClick('/ScottJRBueaxDew.jpg')}/>
        <Image src='/TRiceGrind.jpg' size='medium' centered onClick={() => handleImageClick('/TRiceGrind.jpg')}/>
        <Image src='/TeamInTheGate.jpg' size='medium' centered onClick={() => handleImageClick('/TeamInTheGate.jpg')}/>
        <Image src='/JRAndEileen.jpg' size='medium' centered onClick={() => handleImageClick('/JRAndEileen.jpg')}/>
        <Image src='/AustinScottBueax.jpg' size='medium' centered onClick={() => handleImageClick('/AustinScottBueax.jpg')}/>
        <Image src='/EileenCoachingSesh.jpg' size='medium' centered onClick={() => handleImageClick('/EileenCoachingSesh.jpg')}/>
        <Image src='/EileenMeditating.jpg' size='medium' centered onClick={() => handleImageClick('/EileenMeditating.jpg')}/>
        <Image src='/ÆsirKnucks.jpg' size='medium' centered onClick={() => handleImageClick('/ÆsirKnucks.jpg')}/>
        <Image src='/ÆSirCorral.jpg' size='medium' centered onClick={() => handleImageClick('/ÆSirCorral.jpg')}/>
        <Image src='/EileenPodium2.jpg' size='medium' centered onClick={() => handleImageClick('/EileenPodium2.jpg')}/>
        <Image src='/EileenTropies.jpg' size='medium' centered onClick={() => handleImageClick('/EileenTropies.jpg')}/>
        <Image src='ÆSIRAndElieenDew.jpg' size='medium' centered onClick={() => handleImageClick('ÆSIRAndElieenDew.jpg')}/>
        <Image src='/ÆSIRAndSwixGlobal.png' size='medium' centered onClick={() => handleImageClick('/ÆSIRAndSwixGlobal.png')}/>
        <Image src='/ÆSIRServices.jpg' size='medium' centered onClick={() => handleImageClick('/ÆSIRServices.jpg')}/>
        <Image src='/ÆSIRDoor.jpg' size='medium' centered onClick={() => handleImageClick('/ÆSIRDoor.jpg')}/>
        </div>
        </Segment>
      </div>
    </div>
    {selectedImage && (
        <Modal open={!!selectedImage} onClose={handleCloseModal} basic size='large' style={{ margin: 0 }}>
          <Modal.Content image>
            <Image src={selectedImage} size='large' centered />
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export default Gallery;

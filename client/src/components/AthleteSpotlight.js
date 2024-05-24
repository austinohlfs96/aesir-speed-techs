import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Embed, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Head from './Header';
import Footer from './Footer';



const AthleteSpotlight = () => {

  useEffect(() => {
    const handleScroll = () => {
      const segments = document.querySelectorAll('.slide-in');

      segments.forEach(segment => {
        const slideInAt = (window.scrollY + window.innerHeight) - segment.clientHeight / 20;
        const segmentBottom = segment.offsetTop + segment.clientHeight;
        const isHalfShown = slideInAt > segment.offsetTop;
        const isNotScrolledPast = window.scrollY < segmentBottom;

        if (isHalfShown && isNotScrolledPast) {
          segment.classList.add('active');
        } else {
          segment.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const firstSegment = document.querySelector('.slide-in');
    if (firstSegment) {
      firstSegment.classList.add('active');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head />
      <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {/* <Segment style={{ background: 'rgba(16, 51, 78, 0.6)', width: '100%', height: '77vh', overflow: 'auto' }}> */}
        <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Athlete Page</h1>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px' }}> {/* Add margin bottom for spacing */}
    <Image src='/ElieenDewTrophies.jpg' size='small' floated='left' />
    <h1 style={{ color: "white", marginLeft: '10px', fontFamily: "Anta"}}>Eileen Gu  <a href="https://www.instagram.com/eileengu/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>
    Congratulations to three-time Olympic medalist Eileen Gu for dominating the women's ski halfpipe at Dew Tour with an astounding score of 97.66! 🏆 Team Æsir celebrates her remarkable victory and unwavering dedication. Here's to many more triumphs ahead! 🎉
  </h4>

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
    <Embed
      style={{ width: '100%' }}
      id='O0drnWf1T-I'
      placeholder='https://i2.wp.com/dewtour.com/wp-content/uploads/2024/03/eileen-gu-dew-tour-2024-winning-run.jpg?resize=1200%2C600&ssl=1'
      source='youtube'
    />
  </div>
</Segment>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
    <Image src='https://usskiandsnowboard.org/sites/default/files/styles/athlete_headshot_node/public/images/athletes/head-shots/2024-02/Alessandro_Kappa.jpg?itok=kVPu3U2b' size='small' floated='left' />
    <h1 style={{ color: "white", marginLeft: '10px', fontFamily: "Anta"}}>Alessandro Barbieri  <a href="https://www.instagram.com/alessandro_pdx/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>
  Check out Æsir team rider Alessandro's 2rd place run from USASA Nationals last year at Copper. Look forward to seeing this young ripper take on the best in the country again this year at USASA Nationals in Copper March-29 April-10!</h4>

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
        <Embed
          style={{ width: '100%' }}
          id='tmaQikfrjNs'
          placeholder='https://i.ytimg.com/vi/tmaQikfrjNs/hqdefault.jpg'
          source='youtube'
        />
  </div>
</Segment>
        
<Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
  <Image src='https://pbs.twimg.com/media/Fp2GGmaakAEnJHk.jpg:large' size='small' floated='left' />
        <h1 style={{color: "white"}}>Patti Khou <a href="https://www.instagram.com/pzsparkle/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>As the youngest-ever Winter DewTour competitor, China's Zhou Yizhu (Patti Zhou) took silver in the Women's Snowboard Superpipe at Copper Mountain, Colorado. The 11-year-old threw down a 90.66 run in her second attempt at the pipe.</h4>

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
  <Embed
          style={{ width: '100%' }}
          id='CeArxrZneGw'
          placeholder='https://imageio.forbes.com/specials-images/imageserve/641b534511944ecdc9422d10/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
          source='youtube'
        />
  </div>
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>
        The 11-year-old snowboarder finished second in the Dew Tour women’s snowboard superpipe event Sunday in Copper Mountain, Colorado, becoming the youngest athlete to ever land on a winter Dew Tour podium and the second-youngest ever at any Dew Tour event. Zhou trailed 14-year-old South Korean Gaon Choi, whose score of 98.33 was one of the highest ever awarded at the Dew Tour.</h4>
  </Segment>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
  <Image src='https://pbs.twimg.com/media/ERGGfVDWsAI0yHE.jpg' size='small' floated='left' />
        <h1 style={{color: "white"}}>Jason Wolle <a href="https://www.instagram.com/jason_wolle/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>Join Æsir team rider Jason Wolle as he unveils the artistry behind mastering Michalchuks in the halfpipe.🔥 Dive into the depths of skill and finesse with his exclusive trick tip session, where precision meets passion. Get ready to elevate your halfpipe game with Jason's expert guidance!</h4>
       

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
  <Embed
          style={{ width: '100%' }}
          id='x6Qbvne4DdM'
          placeholder='https://www.monsterarmy.com/RFS/images/2020/04/20/a0d801b2-ef1e-4793-a163-0c8007f09354.jpg'
          source='youtube'
        />
  </div>
  </Segment>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
  <Image src='https://news.cgtn.com/news/3d3d774d3167444e31457a6333566d54/img/a78fd145461c4d3092eb1b2585c100bf/a78fd145461c4d3092eb1b2585c100bf.jpg' size='small' floated='left' />
        <h1 style={{color: "white"}}>XueTong Cai (TongTong) <a href="https://www.instagram.com/xtongc/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>Æsir Team rider Xuetong Cai triumphs in a mesmerizing performance at the FIS Women's Super Pipe Contest! With unwavering poise, she unleashes an array of gravity-defying tricks including backside 900s, frontside 720s, and stylish alley-oop airs. Her flawless execution and seamless transitions captivate the crowd as she dominates the snow with finesse. Scoring an impressive 92.5, Cai's winning run embodies the epitome of excellence in women's snowboarding. Witness her mastery of the super pipe as she soars to new heights and secures her rightful place as champion. 🏂🏆</h4>
       

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
  <Embed
          style={{ width: '100%' }}
          id='kUJE4v-0JG0'
          placeholder='https://i.ytimg.com/vi/kUJE4v-0JG0/hqdefault.jpg'
          source='youtube'
        />
  </div>
  </Segment>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  margin: '20px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
  <Image src='EliGold24.jpg' size='small' floated='left' />
        <h1 style={{color: "white"}}>Eli Stroker <a href="https://www.instagram.com/eli_shreds/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>Dive into the world of young talent with Æsir Team's rising star, Eli Stroker, as he unveils his weapon of choice for the season: the Never Summer Yutes board. Discover the passion driving Eli's ride as he shares the secrets behind his board selection.</h4>
       

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
  <Embed
          style={{ width: '100%' }}
          id='wbV7yeoPTYQ'
          placeholder='https://i.ytimg.com/vi/3aa7GDm2wVE/maxresdefault.jpg'
          source='youtube'
        />
  </div>
  </Segment>

        <Segment className="slide-in" style={{ 
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
  borderRadius: '0px',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '20px',
  marginBottom: '120px',
  display: 'flex', // Make the segment a flex container
  alignItems: 'center', // Align items vertically
  flexDirection: 'column', // Stack items vertically
}}>
  <div style={{ marginBottom: '20px', display:'flex', flexDirection:'column', alignItems: 'center' }}> {/* Add margin bottom for spacing */}
  <Image src='https://www.denverpost.com/wp-content/uploads/2022/01/GettyImages-1306573888.jpg?w=1024' size='small' floated='left' />
        <h1 style={{color: "white"}}>Zoe Kalapos <a href="https://www.instagram.com/zoe_kalapos/" target="_blank" rel="noopener noreferrer">
      <Icon name='instagram' size='small' inverted link />
    </a> </h1>
  </div>
  
  <h4 style={{ color: "white", textAlign: 'center', margin: '0 20px' }}>Embark on an inspiring journey with Æsir Team rider Zoe Kalapos as she spends a day shredding with a group of young rippers, imparting the art of mastering the 50-50 on a box. 🏂✨ Witness Zoe's passion ignite as she guides the next generation through the slopes, sharing invaluable tricks and techniques. </h4>
       

  <div style={{ width: '100%', marginTop: '20px' }}> {/* Add margin top for spacing */}
  <Embed
          style={{ width: '100%' }}
          id='XX67pyyC6XQ'
          placeholder='https://i.ytimg.com/vi/XX67pyyC6XQ/maxresdefault.jpg'
          source='youtube'
        />
  </div>
  </Segment >

        {/* </Segment>
         */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AthleteSpotlight;


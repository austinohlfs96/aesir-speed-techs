import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Embed } from 'semantic-ui-react';
import Head from './Header';



const AthleteSpotlight = () => {

  return (
    <>
      <Head />
      <div className='modal'>
      <div id="services">
      <Segment style={{ background: 'rgba(16, 51, 78, 0.6)', width: '100%', height: '77vh', overflow: 'auto' }}>
        <h1 style={{ color: 'white' }}>Athlete Spotlight</h1>
        <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: 'fit-content' }}>
        <Image src='https://pbs.twimg.com/media/ERGGfVDWsAI0yHE.jpg' size='medium' floated='left' />
        <h1>Jason Wolle</h1>
        <h4>Join Æsir team rider Jason Wolle as he unveils the artistry behind mastering Michalchuks in the halfpipe.🔥 Dive into the depths of skill and finesse with his exclusive trick tip session, where precision meets passion. Get ready to elevate your halfpipe game with Jason's expert guidance!</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='x6Qbvne4DdM'
          placeholder='https://www.monsterarmy.com/RFS/images/2020/04/20/a0d801b2-ef1e-4793-a163-0c8007f09354.jpg'
          source='youtube'
        />
      </div>
        <h4></h4>
        </Segment>
        <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: 'fit-content' }}>
        <Image src='https://news.cgtn.com/news/3d3d774d3167444e31457a6333566d54/img/a78fd145461c4d3092eb1b2585c100bf/a78fd145461c4d3092eb1b2585c100bf.jpg' size='medium' floated='left' />
        <h1>XueTong Cai (TongTong)</h1>
        <h4>Æsir Team rider Xuetong Cai triumphs in a mesmerizing performance at the FIS Women's Super Pipe Contest! With unwavering poise, she unleashes an array of gravity-defying tricks including backside 900s, frontside 720s, and stylish alley-oop airs. Her flawless execution and seamless transitions captivate the crowd as she dominates the snow with finesse. Scoring an impressive 92.5, Cai's winning run embodies the epitome of excellence in women's snowboarding. Witness her mastery of the super pipe as she soars to new heights and secures her rightful place as champion. 🏂🏆</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='kUJE4v-0JG0'
          placeholder='https://i.ytimg.com/vi/kUJE4v-0JG0/hqdefault.jpg'
          source='youtube'
        />
      </div>
        <h4></h4>
        </Segment>
        <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: 'fit-content' }}>
        <Image src='https://www.denverpost.com/wp-content/uploads/2022/01/GettyImages-1306573888.jpg?w=1024' size='medium' floated='left' />
        <h1>Zoe Kalapos</h1>
        <h4>Embark on an inspiring journey with Æsir Team rider Zoe Kalapos as she spends a day shredding with a group of young rippers, imparting the art of mastering the 50-50 on a box. 🏂✨ Witness Zoe's passion ignite as she guides the next generation through the slopes, sharing invaluable tricks and techniques. </h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='XX67pyyC6XQ'
          placeholder='https://i.ytimg.com/vi/XX67pyyC6XQ/maxresdefault.jpg'
          source='youtube'
        />
      </div>
        </Segment>
        <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: 'fit-content' }}>
        <Image src='https://neversummer.com/cdn/shop/files/EliStroker.jpg?v=1666638331&width=1080' size='medium' floated='left' />
        <h1>Eli Stroker</h1>
        <h4>Dive into the world of young talent with Æsir Team's rising star, Eli Stroker, as he unveils his weapon of choice for the season: the Never Summer Yutes board. Discover the passion driving Eli's ride as he shares the secrets behind his board selection.</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='wbV7yeoPTYQ'
          placeholder='https://i.ytimg.com/vi/3aa7GDm2wVE/maxresdefault.jpg'
          source='youtube'
        />
      </div>
        </Segment>
        <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: 'fit-content' }}>
        <Image src='https://pbs.twimg.com/media/Fp2GGmaakAEnJHk.jpg:large' size='medium' floated='left' />
        <h1>Patti Khou</h1>
        <h4>As the youngest-ever Winter DewTour competitor, China's Zhou Yizhu (Patti Zhou) took silver in the Women's Snowboard Superpipe at Copper Mountain, Colorado. The 11-year-old threw down a 90.66 run in her second attempt at the pipe.</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='CeArxrZneGw'
          placeholder='https://imageio.forbes.com/specials-images/imageserve/641b534511944ecdc9422d10/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
          source='youtube'
        />
      </div>
        <h4>
        The 11-year-old snowboarder finished second in the Dew Tour women’s snowboard superpipe event Sunday in Copper Mountain, Colorado, becoming the youngest athlete to ever land on a winter Dew Tour podium and the second-youngest ever at any Dew Tour event. Zhou trailed 14-year-old South Korean Gaon Choi, whose score of 98.33 was one of the highest ever awarded at the Dew Tour.</h4>
        </Segment>
        </Segment>
        
      </div>
    </div>
    </>
  );
};

export default AthleteSpotlight;


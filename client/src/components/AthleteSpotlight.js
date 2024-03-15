import React, { useState, useEffect } from 'react';
import { Item, Image, Segment, Embed } from 'semantic-ui-react';
import Head from './Header';



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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head />
      <div className='modal'>
      <div id="services">
      {/* <Segment style={{ background: 'rgba(16, 51, 78, 0.6)', width: '100%', height: '77vh', overflow: 'auto' }}> */}
        <h1 style={{ color: 'white' }}>Athlete Spotlight</h1>
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        height: 'auto'
         }}>
        <Image src='/ElieenDewTrophies.jpg' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Eileen Gu</h1>
        <h4 style={{color: "white"}}>Congratulations to three time opymipic medalist Eileen Gu for dominating the women's ski halfpipe at Dew Tour with an astounding score of 97.66! 🏆 Team Æsir celebrates her remarkable victory and unwavering dedication. Here's to many more triumphs ahead! 🎉</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='O0drnWf1T-I'
          placeholder='https://i2.wp.com/dewtour.com/wp-content/uploads/2024/03/eileen-gu-dew-tour-2024-winning-run.jpg?resize=1200%2C600&ssl=1'
          source='youtube'
        />
      </div>
        <h4></h4>
        </Segment>
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        height: 'auto'
         }}>
        <Image src='https://scontent-den2-1.xx.fbcdn.net/v/t1.6435-9/56839716_2086949598275692_8855843280085057536_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zmzvcVyl_jwAX-GCnjx&_nc_ht=scontent-den2-1.xx&oh=00_AfCZasJBVeqsJiWyHSz82Pplbg1yz_eAoRt-WoyIosadEg&oe=661BE3D2' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Alessandro Barbieri</h1>
        <h4 style={{color: "white"}}>Check out Æsir team rider Alessandro's 2rd place run from USASA Nationals last year at Copper. Look forward to seeing this young ripper take on the best in the country again this year at USASA Nationals in Copper March-29 April-10!</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='tmaQikfrjNs'
          placeholder='https://i.ytimg.com/vi/tmaQikfrjNs/hqdefault.jpg'
          source='youtube'
        />
      </div>
        <h4></h4>
        </Segment>
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        // marginTop: "70px",
        // marginBottom: "65px",
        height: 'auto'
         }}>
        <Image src='https://pbs.twimg.com/media/Fp2GGmaakAEnJHk.jpg:large' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Patti Khou</h1>
        <h4 style={{color: "white"}}>As the youngest-ever Winter DewTour competitor, China's Zhou Yizhu (Patti Zhou) took silver in the Women's Snowboard Superpipe at Copper Mountain, Colorado. The 11-year-old threw down a 90.66 run in her second attempt at the pipe.</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='CeArxrZneGw'
          placeholder='https://imageio.forbes.com/specials-images/imageserve/641b534511944ecdc9422d10/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
          source='youtube'
        />
      </div>
        <h4 style={{color: "white"}}>
        The 11-year-old snowboarder finished second in the Dew Tour women’s snowboard superpipe event Sunday in Copper Mountain, Colorado, becoming the youngest athlete to ever land on a winter Dew Tour podium and the second-youngest ever at any Dew Tour event. Zhou trailed 14-year-old South Korean Gaon Choi, whose score of 98.33 was one of the highest ever awarded at the Dew Tour.</h4>
        </Segment>
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        height: 'auto'
         }}>
        <Image src='https://pbs.twimg.com/media/ERGGfVDWsAI0yHE.jpg' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Jason Wolle</h1>
        <h4 style={{color: "white"}}>Join Æsir team rider Jason Wolle as he unveils the artistry behind mastering Michalchuks in the halfpipe.🔥 Dive into the depths of skill and finesse with his exclusive trick tip session, where precision meets passion. Get ready to elevate your halfpipe game with Jason's expert guidance!</h4>
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
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        // marginTop: "70px",
        height: 'auto'
         }}>
        <Image src='https://news.cgtn.com/news/3d3d774d3167444e31457a6333566d54/img/a78fd145461c4d3092eb1b2585c100bf/a78fd145461c4d3092eb1b2585c100bf.jpg' size='medium' floated='left' />
        <h1 style={{color: "white"}}>XueTong Cai (TongTong)</h1>
        <h4 style={{color: "white"}}>Æsir Team rider Xuetong Cai triumphs in a mesmerizing performance at the FIS Women's Super Pipe Contest! With unwavering poise, she unleashes an array of gravity-defying tricks including backside 900s, frontside 720s, and stylish alley-oop airs. Her flawless execution and seamless transitions captivate the crowd as she dominates the snow with finesse. Scoring an impressive 92.5, Cai's winning run embodies the epitome of excellence in women's snowboarding. Witness her mastery of the super pipe as she soars to new heights and secures her rightful place as champion. 🏂🏆</h4>
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
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        // marginTop: "70px",
        height: 'auto'
         }}>
        <Image src='https://neversummer.com/cdn/shop/files/EliStroker.jpg?v=1666638331&width=1080' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Eli Stroker</h1>
        <h4 style={{color: "white"}}>Dive into the world of young talent with Æsir Team's rising star, Eli Stroker, as he unveils his weapon of choice for the season: the Never Summer Yutes board. Discover the passion driving Eli's ride as he shares the secrets behind his board selection.</h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='wbV7yeoPTYQ'
          placeholder='https://i.ytimg.com/vi/3aa7GDm2wVE/maxresdefault.jpg'
          source='youtube'
        />
      </div>
        </Segment>
        <Segment className="slide-in" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        // marginTop: "70px",
        height: 'auto'
         }}>
        <Image src='https://www.denverpost.com/wp-content/uploads/2022/01/GettyImages-1306573888.jpg?w=1024' size='medium' floated='left' />
        <h1 style={{color: "white"}}>Zoe Kalapos</h1>
        <h4 style={{color: "white"}}>Embark on an inspiring journey with Æsir Team rider Zoe Kalapos as she spends a day shredding with a group of young rippers, imparting the art of mastering the 50-50 on a box. 🏂✨ Witness Zoe's passion ignite as she guides the next generation through the slopes, sharing invaluable tricks and techniques. </h4>
        <div style={{ width: '100%' }}> {/* Set the width to 100% */}
        <Embed
          style={{ width: '100%' }}
          id='XX67pyyC6XQ'
          placeholder='https://i.ytimg.com/vi/XX67pyyC6XQ/maxresdefault.jpg'
          source='youtube'
        />
      </div>
        </Segment>
        {/* </Segment>
         */}
      </div>
    </div>
    </>
  );
};

export default AthleteSpotlight;


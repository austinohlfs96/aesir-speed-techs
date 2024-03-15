
import React, {useEffect, useState} from "react";
import { Segment, Image } from "semantic-ui-react";
import Head from "./Header";


const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Activate the animation when the component mounts
    setIsActive(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const segments = document.querySelectorAll('.segment' || '.burtonPipe');

    segments.forEach(function(segment) {
        const bounding = segment.getBoundingClientRect();
        const isInViewport = (
            bounding.top >= -100 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );

        if (isInViewport) {
            segment.classList.add('visible');
        }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const burtonPipe = document.querySelector('.burtonPipe');
      if (!burtonPipe) return; // Check if the element exists
  
      const scrollPosition = window.scrollY;
      const burtonPipePosition = burtonPipe.offsetTop;
  
      if (scrollPosition > burtonPipePosition - window.innerHeight + 250) {
        burtonPipe.classList.add('visible');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <Head />
      {/* <Segment style={{ background: "#f0f0f0", textAlign: "center" }}> */}
      <div  className={`transform-on-load ${isActive ? 'active' : ''}`} style={{ position: "relative", marginTop: "10px", width: '100%', height: '20%' }}>
  <Image 
    src="https://content.invisioncic.com/n281171/monthly_2020_03/image.png.1219740564eea0550ff238a905befbf5.png"
    fluid
    centered
  />
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      margin: 'auto',
      width: '57%', // Set width to 80% of the parent container's width
      height: '50%', // Set height to 80% of the parent container's height
    }}
  >
    <Segment style={{ background: 'rgba(255, 255, 255, 0.4)', width: '56vw', height: '31vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '4.3vw', color: '#05082b' }}>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' size='tiny' style={{width: "9vw", height: "auto"}}/>
         Æsir Speed Techs
      </h1>
      <p style={{ fontSize: '1.5vw', color: '#05082b' }}>GO FAST TAKE CHANCES!</p>
    </Segment>
  </div>
</div>

      {/* </Segment> */}
      <div style={{marginTop: "3vw"}}>
      <Segment className="landing" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        marginTop: "25px",
        height: 'auto'
         }}>
        <Image
          src="EileenPodium.jpg"
          size="medium"
          floated="left"
        />
        <h2 style={{fontSize: "3vw", textAlign: "center", color: "white"}}>Mission</h2>
        <h4 style={{fontSize: "2.6vw", textAlign: "center", color: "white"}}>
        At Æsir Speed Techs, our mission is to elevate the winter sports competition by providing unmatched tuning services that empower athletes and coaches to achieve their highest potential on the slopes. We are committed to excellence, constantly pushing the boundaries of performance tuning through innovation and precision. Our goal is to be the trusted partner for winter sports enthusiasts, delivering quality tuning that not only meets but exceeds the rigorous demands of competitive skiing and snowboarding. With a passion for the sport and a dedication to craftsmanship, we strive to enhance the joy and success of every individual who chooses Æsir Speed Techs.</h4> 
          </Segment>
          <Segment className="landing" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginLeft: '55px',
        marginRight: '55px',
        marginTop: "70px",
        height: 'auto'
         }}>
          <Image
          src="/JRTuningEileenSkis.jpg"
          size="medium"
          floated="right"
        />
        <h2 style={{fontSize: "3vw", textAlign: "center", color: "white"}}>Premier Services</h2>
          <h4 style={{fontSize: "2.6vw", textAlign: "center", color: "white"}}>Discover a new level of performance with Æsir Speed Techs' premier tuning services. Our offerings are meticulously crafted to cater to the unique needs of athletes and coaches, setting us apart as the premier destination for professional ski and snowboard tuning. We utilize cutting-edge equipment and high-end products to ensure that every tuning process is executed with precision.</h4> 
          </Segment>
          <Segment className="landing" style={{ 
        background: 'rgba(16, 51, 78, 0.6)',
        borderRadius: '0px',
        marginRight: '55px',
        marginLeft: '55px',
        marginTop: "70px",
        height: 'auto'
         }}>
        <Image
          src="/ÆsirAndGraham.jpg"
          size="medium"
          floated="left"
        />
        <h2 style={{fontSize: "3vw", textAlign: "center", color: "white"}}>Our Crew</h2>
        <h4 style={{fontSize: "2.6vw", textAlign: "center", color: "white"}}>Our success at Æsir Speed Techs is driven by the expertise and passion of our professional employees and technicians. With a dedicated team of skilled individuals who share a genuine love for winter sports, we take pride in delivering unparalleled tuning experiences. Our technicians are not just experts in their field; they are enthusiasts who understand the intricacies of competitive skiing and snowboarding.
        </h4>
      </Segment>
      <div className="burtonPipe">
      <Image
        src="https://www.snowboarder.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2MzUxNDI1MzY0ODMwMTQ3/modified-pipe.jpg"
        size="large"
        centered
      />
      </div>
    </div>
    </div>
  );
};

export default LandingPage;

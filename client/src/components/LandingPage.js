
import React, {useEffect, useState} from "react";
import { Segment, Image, Grid, Header } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { format } from 'date-fns';
import Head from "./Header";
import SnowReport from "./SnowReport";


const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const someCondition = true;
  // const [snowData, setSnowData] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Activate the animation when the component mounts
    setIsActive(true);
  }, []);


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

  useEffect(() => {
    const burtonPipe = document.querySelector('.burtonPipe'); // Target element
    const offset = 250; // Adjust offset for desired appearance

    const handleBurtonPipeVisibility = () => {
      if (!burtonPipe) return; // Check if element exists

      const scrollPosition = window.scrollY;
      const burtonPipePosition = burtonPipe.offsetTop;

      if (scrollPosition > burtonPipePosition - window.innerHeight + offset) {
        burtonPipe.classList.add('visible');
      } else {
        burtonPipe.classList.remove('visible'); // Hide until triggered
      }
    };

    window.addEventListener('scroll', handleBurtonPipeVisibility);

    return () => {
      window.removeEventListener('scroll', handleBurtonPipeVisibility);
    };
  }, []);
  return (
    <div>
      {/* <Head /> */}
        <div className={`animation-container ${isActive ? 'active' : ''}`} style={{ position: "relative" }}>
          <Image src="/AESIRCarve.png" fluid centered />
          <div className="text-overlay" style={{ display: 'grid', position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: 'baseline', alignContent: 'space-between' }}>
            {/* <Segment inverted style={{ backgroundColor: 'transparent', padding: '2em', display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around', alignItems: 'flex-end' }}> */}
              {/* <h1 style={{ fontSize: '9vw', color: '#fff', marginBottom: '2em', lineHeight: '0', display: 'contents', backgroundColor: 'red'}}>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' size='tiny' style={{width: "9vw", height: "auto"}}/>
                ÆSIR Speed Techs
              </h1> */}
              <Head />
             {/* <Segment style={{background: 'rgba(16, 51, 78, 0.6)', width: '20%',  height: '20%', margin: '20px 30px'}}> <h2 style={{ fontSize: '2vw', color: '#fff', color: 'black', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Anta', textDecoration: 'underline'}}>GO FAST TAKE CHANCES!</h2>
             <p style={{ fontSize: '2.1vw'}}><span style={{fontWeight: 'bold', textDecoration: "underline", fontSize: '120%'}}>AESIR SPEED TECHS:</span> Your <span style={{fontWeight: 'bold'}}>PREMIUM</span> destination for athletes seeking an edge through professional equipment services.</p>
             </Segment> */}
            {/* </Segment> */}
          </div>
        </div>

        <div>
  <Segment className="topical-segment" style={{ 
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', // Add a background image with gradient overlay
    backgroundSize: 'cover', // Ensure the background image covers the entire segment
    borderRadius: '0px', // Adjust border radius if needed
    padding: '50px', // Adjust padding for content spacing
    color: 'white', // Set text color to white
    textAlign: 'center', // Center align text
    fontSize: '2vw', // Adjust font size
    fontFamily: 'Anta', // Specify font family
    marginBottom: "0px",
  }}>
    <h1 style={{ fontSize: '4.5vw', color: '#fff', color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Anta', textDecoration: 'underline'}}>GO FAST TAKE CHANCES!</h1>
             <p style={{ fontSize: '3vw'}}><span style={{fontWeight: 'bold', textDecoration: "underline", fontSize: '120%'}}>ÆSIR SPEED TECHS:</span> Your <span style={{fontWeight: 'bold', color: 'red'}}>PREMIUM</span> destination for athletes seeking an edge through professional equipment services.</p>
    <button onClick={() => navigate("/login")} style={{fontSize: "90%", fontFamily: 'Anta', color: 'white', marginBottom: '0px', backgroundColor: 'black', borderRadius: '20px', border: '2px solid white', padding: '3px', paddingLeft: '9px', paddingRight: '9px', textDecoration: 'underline'}}>Book Now</button>
  </Segment>
</div>
      {/* </Segment> */}
      <div>
      <Segment className="slide-in" style={{ 
    background: 'rgb(34, 40, 49)',
    borderRadius: '0px', // Added border radius
    // padding: '20px', // Added padding for better spacing
    // margin: '25px 0', // Adjusted margin
    height: 'auto',
    display: 'flex', // Added flex display for image and text alignment
    alignItems: 'center', // Center align items vertically
    color: 'white', // Changed text color
    flexDirection: 'row', // Align items vertically
    marginBottom: '0px'
}}>
 
    <div 
          style={{ position: 'relative', fontSize: "3vw", }}
          >
            <Image
              src="/JRBaseGrind1.jpg"
              size="medium"
              floated="left"
              className="dynamic-image"
              // style={{ marginBottom: '20px' }}
            />
             
          </div>
         <div style={{maxWidth: '55%', marginLeft: '5%'}}>
         <h1 style={{fontFamily: "Anta", textAlign: "center" }}>
            Premier Services
            </h1>
          <p style={{ fontSize: "2vw", textAlign: 'center'   }}>Discover a new level of performance with Æsir Speed Techs' premier tuning services. Our offerings are meticulously crafted to cater to the unique needs of athletes and coaches, setting us apart as the premier destination for professional ski and snowboard tuning. We utilize cutting-edge equipment and high-end products to ensure that every tuning process is executed with precision.</p> 
         </div>
        
          
</Segment>

<Segment className="slide-in" style={{ 
     background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
    borderRadius: '0px', // Added border radius
    // padding: '20px', // Added padding for better spacing
    margin: '0px 0', // Adjusted margin
    height: 'auto',
    display: 'flex', // Added flex display for image and text alignment
    alignItems: 'center', // Center align items vertically
    color: 'white', // Changed text color
    flexDirection: 'row', // Align items vertically
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}}>
          <a href="/tuningservices#service-item-1" style={{ textDecoration: 'none' }}>
          <div 
          onClick={() => navigate(`/tuningservices#service-item-1`)}
          className="image-container"
          style={{ position: 'relative', fontSize: "3vw", display: 'flex' }}
          >
            <Image
            
              src="/ProWax.jpg"
              size="small"
              floated="left"
              className="dynamic-image"
              style={{ marginBottom: '20px', borderRadius: '10px', height: '300px', width: '225px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}
            />
            <div style={{ position: 'absolute', top: '0', right: '13px', height: '300px', width: '225px', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0', borderRadius: '10px' }}></div>
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', fontFamily: "Anta", textAlign: 'center' }}>
            Pro Wax
            </h1>
          </div>
          </a>
          <a href="/tuningservices#service-item-2" style={{ textDecoration: 'none' }}>
          <div 
          className="image-container"
          onClick={() => navigate(`/tuningservices#service-item-2`)}
          style={{ position: 'relative', fontSize: "3vw", overflow: 'hidden', display: 'flex' }}
          >
            <Image
              src="ProTune.jpg"
              size="small"
              centered
              className="dynamic-image"
              style={{ marginBottom: '20px', borderRadius: '10px', height: '300px', width: '225px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}
            />
            <div style={{ position: 'absolute', top: '0', height: '300px', width: '225px', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0', borderRadius: '10px' }}></div>
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', fontFamily: "Anta", textAlign: 'center' }}>
            Comp Edge/Wax
            </h1>
          </div>
          </a>
          <a href="/tuningservices#service-item-3" style={{ textDecoration: 'none' }}>
          <div 
          className="image-container"
          onClick={() => navigate(`/tuningservices#service-item-3`)}
          style={{ position: 'relative', fontSize: "3vw", display: 'flex' }}
          >
            <Image
              src="/HuckknifeGrind.jpg"
              size="small"
              floated="right"
              className="dynamic-image"
              style={{ marginBottom: '20px', borderRadius: '10px', height: '300px', width: '225px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}
            />
             <div style={{ position: 'absolute', top: '0', left: '13px', height: '300px', width: '225px', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0', borderRadius: '10px' }}></div>
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', fontFamily: "Anta", textAlign: 'center' }}>
            Pro Tune
            </h1>
          </div>
          </a>
          <a href="/tuningservices#service-item-4" style={{ textDecoration: 'none' }}>
          <div 
          className="image-container"
          onClick={() => navigate(`/tuningservices#service-item-4`)}
          style={{ position: 'relative', fontSize: "3vw", display: 'flex' }}
          >
            <Image
              src="/ProE:W.jpg"
              size="small"
              floated="right"
              className="dynamic-image"
              style={{ marginBottom: '20px', borderRadius: '10px', height: '300px', width: '225px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}
            />
            <div style={{ position: 'absolute', top: '0', left: '13px', height: '300px', width: '225px', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0', borderRadius: '10px' }}></div>
            <h1 style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', fontFamily: "Anta", textAlign: 'center' }}>
            Full Compitition Tune
            </h1>
          </div>
          </a>
          </Segment>

          
          {/* <SnowReport/> */}


          <div>
  <Segment className="topical-segment" style={{ 
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', // Add a background image with gradient overlay
    backgroundSize: 'cover', // Ensure the background image covers the entire segment
    borderRadius: '0px', // Adjust border radius if needed
    padding: '50px', // Adjust padding for content spacing
    color: 'white', // Set text color to white
    textAlign: 'center', // Center align text
    fontSize: '2vw', // Adjust font size
    fontFamily: 'Anta', // Specify font family
    marginBottom: "0px",
    marginTop: '100px'
  }}>
    <h1 style={{ fontSize: '5vw', color: '#fff', color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Anta', textDecoration: 'underline'}}>DON'T KNOW WHAT WAX TO USE?</h1>
             <p style={{ fontSize: '5vw'}}>Check out our snow conditions and wax recommendations</p>
    <button onClick={() => navigate("/snow-conditions")} style={{fontSize: "150%", fontFamily: 'Anta', color: 'white', marginBottom: '0px', backgroundColor: 'black', borderRadius: '20px', border: '2px solid white', padding: '3px', paddingLeft: '9px', paddingRight: '9px', textDecoration: 'underline'}}>Snow Conditions</button>
  </Segment>
</div>
   
          
          <Segment className="slide-in" style={{ 
    background: 'rgb(117, 102, 102)',
    borderRadius: '0px', // Added border radius
    // padding: '20px', // Added padding for better spacing
    marginTop: '150px', // Adjusted margin
    marginBottom: '0px',
    height: 'auto',
    display: 'flex', // Added flex display for image and text alignment
    alignItems: 'center', // Center align items vertically
    color: 'white', // Changed text color
    flexDirection: 'row-reverse', // Align items vertically
}}>
          <div style={{ position: 'relative', fontSize: "3vw" }}>
  <Image
    src="EileenPodium.jpg"
    size="medium"
    floated="left"
    className="dynamic-image"
    style={{ marginBottom: '20px' }}
  />
</div>

    
    <p style={{ fontSize: "2.2vw", textAlign: "center", maxWidth: '55%', marginRight: '5%' }}>
    <h1 style={{ color: 'white', fontFamily: "Anta", marginBottom: '10px'}}>THE ÆSIR MISSION</h1>
        At Æsir Speed Techs, our mission is to elevate the winter sports competition by providing unmatched tuning services that empower athletes and coaches to achieve their highest potential on the slopes. We are committed to excellence, constantly pushing the boundaries of performance tuning through innovation and precision. Our goal is to be the trusted partner for winter sports enthusiasts, delivering quality tuning that not only meets but exceeds the rigorous demands of competitive skiing and snowboarding. With a passion for the sport and a dedication to craftsmanship, we strive to enhance the joy and success of every individual who chooses Æsir Speed Techs.
    </p> 
          
          </Segment>
         


          <Segment className="slide-in" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
        borderRadius: '0px',
        // marginRight: '20px',
        // marginLeft: '20px',
        marginTop: "75px",
        height: 'auto'
         }}>
        
        <div style={{ position: 'relative', fontSize: "3vw" }}>
            <Image
              src="AESIRCREW.jpg"
              size="medium"
              className="dynamic-image"
              centered
              style={{ marginBottom: '20px' }}
            />
            <h1 style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', fontFamily: "Anta" }}>
            Our Crew
            </h1>
          </div>
        <p style={{fontSize: "2.2vw", textAlign: "center", color: "white"}}>Our success at Æsir Speed Techs is driven by the expertise and passion of our professional employees and technicians. With a dedicated team of skilled individuals who share a genuine love for winter sports, we take pride in delivering unparalleled tuning experiences. Our technicians are not just experts in their field; they are enthusiasts who understand the intricacies of competitive skiing and snowboarding.
        </p>
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


import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { Header, Segment, Button, Image, Sticky } from 'semantic-ui-react'
import { useSelector } from "react-redux"
import { logout, fetchCurrentUser, setCurrentCoach, addError } from '../features/coach/coachSlice'
import { useToasts } from 'react-toast-notifications';
import { getToken } from '../utils/main';
import { checkToken } from '../utils/main';


function Head() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { addToast } = useToasts();
  const coach = useSelector((state) => state.coach.data);
  const handleNewError = useCallback((error) => {
    addToast(error, { appearance: 'error', autoDismiss: true });
  }, [addToast]);

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 850);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state with current window width
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!coach) {
      fetch("/auth/me",{
        headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
            }
      })
      .then(res => {
        if (res.ok) {
          res.json().then(coach => dispatch(setCurrentCoach(coach)))
        } else if (res.status === 422) {
          fetch("/auth/refresh", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
            }
          })
          .then(res => {
            if (res.ok) {
              res.json().then(resObj => {
                dispatch(setCurrentCoach(resObj.coach))
                localStorage.setItem("jwt_token", resObj.jwt_token)
               
              })
            } else {
              
              res.json().then(errorObj => {
                dispatch(addError(errorObj.message));
                // handleNewError("You have been signed out please sign in to use account services");
              });
            }
          })
        } else {
          handleLogout()
          res.json().then(errorObj => handleNewError(errorObj.message || errorObj.msg))
        }
      })
      .catch(error => {
        dispatch(addError(error));
        dispatch(logout())
        // handleNewError(error);
      });
    }
  }, [handleNewError, coach])


  const handleLogout = () => {
    localStorage.removeItem("jwt_token")
    localStorage.removeItem("refresh_token")
    dispatch(logout())
    navigate("/")
 }

 const toggleMenu = () => {
  setShowMenu(!showMenu);
}
  
  return (
<div>

<Sticky style={{marginTop: '10px'}}>
  <Segment style={{ background: 'rgba(16, 51, 78, 0.6)', borderRadius: '0px' }}>
    <div>
      <Header id="title" as='h3' textAlign='left' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png' size='small' onClick={() => navigate('/')} />
        ÆSIR Speed Techs
        <div style={{display: 'flex', float: 'right'}}>
      {!coach ? (
            <>
              <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} primary onClick={() => navigate('/login')}>Book</Button>
              {/* <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/signup')}>Register</Button> */}
            </>
          ) : (
            <>
              <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} primary onClick={() => navigate('/coachespage')}>Profile</Button>
              <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} primary onClick={() => navigate('/coachespage')}>Profile</Button>
              <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={handleLogout}>Logout</Button>
            </>
          )}
      </div>
      </Header>
      
    </div>
    <Header id='headerButtons' as='h3' textAlign='center'>
      {!isMobile && ( // Conditionally render buttons if not on mobile
        <Button.Group className='menu-buttons' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/')}>Home</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/tuningservices')}>Services</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/gallery')}>Gallery</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/athletespotlight')}>Athlete Page</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/about')}>About</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline', padding: '5px 10px', fontSize: '12px'}} secondary onClick={() => navigate('/contact')}>Contact Us</Button>
          {/* {!coach ? (
            <>
              <Button primary onClick={() => navigate('/login')}>Login</Button>
              <Button secondary onClick={() => navigate('/signup')}>Register</Button>
            </>
          ) : (
            <>
              <Button primary onClick={() => navigate('/coachespage')}>Profile</Button>
              <Button secondary onClick={handleLogout}>Logout</Button>
            </>
          )} */}
        </Button.Group>
        
      )}
      <Button.Group>
        {/* Show the hamburger icon only when the page width is less than 850px */}
        {isMobile && <Button icon='bars' onClick={toggleMenu} className="mobile-menu-icon" style={{display: 'contents'}}/>}
      </Button.Group>
      {/* Render the menu items when showMenu is true or when the page width is more than 850px */}
      {showMenu && isMobile && (
        <div className="menu-dropdown">
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/')}>Home</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/tuningservices')}>Services</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/gallery')}>Gallery</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/athletespotlight')}>Athlete Page</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/about')}>About</Button>
          <Button style={{borderRadius: '0px', textDecoration: 'underline'}} secondary onClick={() => navigate('/contact')}>Contact Us</Button>
          
        </div>
      )}
     
    </Header>
  </Segment>
</Sticky>
</div>
  );
}

export default Head;

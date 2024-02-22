import React, { useState, useEffect, useCallback } from 'react';
import { Segment, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { logout, fetchCurrentUser, setCurrentCoach, addError } from '../features/coach/coachSlice'
import { useToasts } from 'react-toast-notifications';
import Head from "./Header";

const src = '/images/wireframe/image-text.png'

const Title = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { addToast } = useToasts();
  const coach = useSelector((state) => state.coach.data);
  const handleNewError = useCallback((error) => {
    addToast(error, { appearance: 'error', autoDismiss: true });
  }, [addToast]);

  useEffect(() => {
    // if (!coach) {
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
                // navigate('/')
                dispatch(addError(errorObj.message));
                // handleNewError("You have been signed out please sign in to use account services");
              });
            }
          })
        } else {
          // res.json().then(errorObj => handleNewError(errorObj.message || errorObj.msg))
        }
      })
      .catch(error => {
        dispatch(addError(error));
        // handleNewError(error);
      });
    // }
  }, [handleNewError, coach])

  return (
    <div >
      <Head coach={coach}/>
      <div className='aboutModal'>
      <Segment style={{ background: 'rgba(16, 51, 78, 0.6)' }}>
      <h1 style={{textAlign: "center", color: "white"}}>About</h1>
    {/* <Image src='https://www.usskiandsnowboard.org/sites/default/files/paragraph/single-image-caption/2020-01/maggiepodium%20.jpg' size='medium' floated='left' /> */}
    <h4 style={{color: "white"}}>
    Welcome to Æsir Speed Techs, your premier destination for professional performance ski and snowboard tuning. At Æsir Speed Techs, we take pride in our commitment to excellence and our passion for elevating winter sports performance. With a dedicated team of skilled technicians and state-of-the-art machinery, we offer top-tier tuning services tailored for athletes and coaches seeking to outperform the competition.
    </h4>
    {/* <Image src='https://www.snowboarder.com/.image/t_share/MTk2MzUwOTc2MjcyNDQzMzMx/tuning-taylor-boyd-02.jpg' size='medium' floated='right' /> */}
    
    <h4 style={{color: "white"}}>
    Our commitment to quality begins with the utilization of cutting-edge equipment and high-end products that set us apart in the industry. We understand the demands of competitive skiing and snowboarding, and our tuning processes are designed to enhance the precision and performance of your gear. Whether you're a seasoned athlete or a coach guiding a team towards victory, our meticulous approach ensures that your equipment is finely tuned to meet the rigorous demands of high-level competition.


    </h4>
    <h4 style={{color: "white"}}>
    At Æsir Speed Techs, we prioritize the individual needs of each client, providing customized tuning solutions to optimize performance on the slopes. Our experienced technicians combine technical expertise with a genuine love for the sport, ensuring that every pair of skis or snowboard receives the attention it deserves. Join the ranks of elite athletes who trust Æsir Speed Techs for their tuning needs, and experience the difference that precision and passion can make in pushing your performance to new heights.
    </h4>
    
  </Segment>
  <Image src='https://fis-cloudinary.corebine.com/image/upload/c_fit,dpr_3.0,f_webp,g_center,h_613,q_auto,w_1980/v1/fis-prod/02' size='large' centered />
  </div>
    </div>
  )
}

export default Title;
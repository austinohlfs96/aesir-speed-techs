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
      fetch("http://127.0.0.1:5555/auth/me",{
        headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
            }
      })
      .then(res => {
        if (res.ok) {
          res.json().then(coach => dispatch(setCurrentCoach(coach)))
        } else if (res.status === 422) {
          fetch("http://127.0.0.1:5555/auth/refresh", {
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
      <div className='modal'>
      <Segment style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
      <h1>About Page</h1>
    <Image src='https://www.usskiandsnowboard.org/sites/default/files/paragraph/single-image-caption/2020-01/maggiepodium%20.jpg' size='medium' floated='left' />
    <h4>
    Welcome to Æsir Performance Tunes, your premier destination for professional performance ski and snowboard tuning. At Æsir Performance Tunes, we take pride in our commitment to excellence and our passion for elevating winter sports performance. With a dedicated team of skilled technicians and state-of-the-art machinery, we offer top-tier tuning services tailored for athletes and coaches seeking to outperform the competition.
    </h4>
    <Image src='https://www.snowboarder.com/.image/t_share/MTk2MzUwOTc2MjcyNDQzMzMx/tuning-taylor-boyd-02.jpg' size='medium' floated='right' />
    
    <h4>
    Our commitment to quality begins with the utilization of cutting-edge equipment and high-end products that set us apart in the industry. We understand the demands of competitive skiing and snowboarding, and our tuning processes are designed to enhance the precision and performance of your gear. Whether you're a seasoned athlete or a coach guiding a team towards victory, our meticulous approach ensures that your equipment is finely tuned to meet the rigorous demands of high-level competition.


    </h4>
    <h4>
    At Æsir Performance Tunes, we prioritize the individual needs of each client, providing customized tuning solutions to optimize performance on the slopes. Our experienced technicians combine technical expertise with a genuine love for the sport, ensuring that every pair of skis or snowboard receives the attention it deserves. Join the ranks of elite athletes who trust Æsir Performance Tunes for their tuning needs, and experience the difference that precision and passion can make in pushing your performance to new heights.
    </h4>
    
  </Segment>
  <Image src='https://www.snowboarder.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2MzUxNDI1MzY0ODMwMTQ3/modified-pipe.jpg' size='large' centered />
  </div>
    </div>
  )
}

export default Title;
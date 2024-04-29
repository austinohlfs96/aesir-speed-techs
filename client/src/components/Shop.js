import React, { useState, useEffect, useCallback } from 'react';
import { Segment, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { logout, fetchCurrentUser, setCurrentCoach, addError } from '../features/coach/coachSlice'
import { useToasts } from 'react-toast-notifications';
import Head from "./Header";

const src = '/images/wireframe/image-text.png'

const Shop = () => {
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
      <div className='shopModal'>
      <Segment style={{ background: 'rgba(16, 51, 78, 0.6)' }}>
      <h1 style={{textAlign: "center", color: "white"}}>Inventory Coming Soon!</h1>
   
  </Segment>
  </div>
    </div>
  )
}

export default Shop;
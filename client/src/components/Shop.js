import React, { useState, useEffect, useCallback } from 'react';
import { Segment, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { logout, fetchCurrentUser, setCurrentCoach, addError } from '../features/coach/coachSlice'
import { useToasts } from 'react-toast-notifications';
import Head from "./Header";
import SnowReport from './SnowReport';
import Footer from './Footer';

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
        <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>ÆSIR SHOP</h1>
      <Segment style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', textAlign: "center", color: "white" }}>
        
      <h1 style={{ textAlign: "center", color: "white", fontWeight: 'bold', textDecoration: 'underline'}}>Inventory Coming Soon!</h1>
      <h3>In the mean time check out our Instagram page for content and updates on our riders and services!</h3>
      <a href="https://www.instagram.com/aesir_techs/" target="_blank" rel="noopener noreferrer">
            <i className="instagram icon" style={{ margin: '0 10px', fontSize: '3em' }}></i>
          </a>
   
  </Segment>
  </div>
  <Footer/>
    </div>
    
  )
}

export default Shop;
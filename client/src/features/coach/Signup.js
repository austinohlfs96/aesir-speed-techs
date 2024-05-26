
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState, useCallback } from 'react';
import { addError } from "./coachSlice";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useToasts } from 'react-toast-notifications';
import Head from "../../components/Header";
import { Button, Form, Image, Segment } from 'semantic-ui-react';
import Footer from '../../components/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [emailVisible, setEmailVisible] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [accessCodeVisible, setAccessCodeVisible] = useState(false);

  const handleNewError = useCallback((error) => {
    addToast(error, { appearance: 'error', autoDismiss: true });
  }, [addToast]);

  const formSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').typeError('Please enter a string.'),
    password: yup.string().required('Please enter a password.').typeError('Please enter a string.'),
    confirmpassword: yup.string().required('Please enter the same password.').typeError('Please enter a string.'), 
    accessCode: yup.string().required('Please enter the access code.'),
    profile_picture: yup.string().url('Please enter a valid URL for the profile picture'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      team: "",
      password: "",
      confirmpassword: "",
      accessCode: '',
      profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      console.log("val", values);
      if (values.password !== values.confirmpassword) {
        handleNewError("Password must match.");
        return;
      }

      const expectedAccessCode = "@ÆSiRteAm23"; // Replace with your expected access code
      if (values.accessCode !== expectedAccessCode) {
        handleNewError("Access code is incorrect.");
        return;
      }
  
      try {
        fetch(`/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
  
        .then(res => {
          if (res.ok) {
              res.json().then(resObj => {
                // Update state or perform other actions upon successful registration
                console.log(resObj);
              })
              navigate('/coachespage');
          } else {
              res.json().then(errorObj => {
              dispatch(addError(errorObj.message));
              handleNewError(errorObj.message);
            });
          }
      })
      } catch (error) {
        console.error('An unexpected error occurred', error);
        handleNewError(error);
      }
    },
  });

  const handleInputChange = (e) => {
    const trimmedValue = e.target.value.trim();
    formik.handleChange(e);
    formik.setFieldValue(e.target.name, trimmedValue);
  
    // Toggle visibility of the next field upon input change
    switch (e.target.name) {
      case 'email':
        setNameVisible(true);
        break;
      case 'name':
        setTeamVisible(true);
        break;
      case 'team':
        setPasswordVisible(true);
        break;
      case 'password':
        setConfirmPasswordVisible(true);
        break;
      case 'confirmpassword':
        setAccessCodeVisible(true);
        break;
      default:
        break;
    }
  };
  

  return (
    <>
      <Head/>
      <div className='registerModal' >
      <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Sign Up</h1>
        <Segment style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', textAlign: 'center' }}>
          <Form onSubmit={formik.handleSubmit}>
          <Form.Field style={{ height: emailVisible ? 'auto' : '0px', opacity: emailVisible ? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: emailVisible ? '10px' : '0px' }}>
             <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{fontFamily: "Anta", color: "white"}}>Email</label>
        <input className='signup'
        id='email'
        name="email"
        onChange={handleInputChange}
        value={formik.values.email}
        placeholder="Enter Email"
        required="true"
      />
      </Segment>
      </Form.Field>
      <Form.Field style={{ height: nameVisible? 'auto' : '0px', opacity: nameVisible? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: nameVisible? '10px' : '0px' }}>
       <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{fontFamily: "Anta", color: "white"}}>Name</label>
        <input className='signup'
        id='name'
        name="name"
        onChange={handleInputChange}
        value={formik.values.name}
        placeholder="Enter Name"
        required="true"
      />
      </Segment>
      </Form.Field>
      <Form.Field style={{ height: teamVisible ? 'auto' : '0px', opacity: teamVisible ? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: teamVisible ? '10px' : '0px' }}>
       <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{fontFamily: "Anta", color: "white"}}>Team (Optional)</label>
        <input className='signup'
        id='team'
        name="team"
        onChange={handleInputChange}
        value={formik.values.team}
        placeholder="Enter team"
        
      />
      </Segment>
      </Form.Field>
      <Form.Field style={{ height: teamVisible? 'auto' : '0px', opacity: teamVisible ? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: teamVisible ? '10px' : '0px' }}>
       <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{fontFamily: "Anta", color: "white"}}>Password</label>
        <input className='signup'
        id='password'
        name="password"
        type="password"
        onChange={handleInputChange}
        value={formik.values.password}
        placeholder="Enter Password"
        required="true"
      />
      </Segment>
      </Form.Field>
      <Form.Field style={{ height: confirmPasswordVisible ? 'auto' : '0px', opacity: confirmPasswordVisible ? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: confirmPasswordVisible ? '10px' : '0px' }}>
       <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{fontFamily: "Anta", color: "white"}}>Confirm Password</label>
        <input className='signup'
        id='confirmpassword'
        name="confirmpassword"
        type="password"
        onChange={handleInputChange}
        value={formik.values.confirmpassword}
        placeholder="Confirm Password"
        required="true"
      />
      </Segment>
      </Form.Field>
      <Form.Field style={{ height: accessCodeVisible ? 'auto' : '0px', opacity: accessCodeVisible ? 1 : 0, transition: 'height 0.5s ease, opacity 0.5s ease', overflow: 'hidden', marginBottom: accessCodeVisible ? '10px' : '0px' }}>
       <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
          <label style={{fontFamily: "Anta", color: "white"}}>Access Code</label>
          <input
            id="accessCode"
            name="accessCode"
            onChange={handleInputChange}
            value={formik.values.accessCode}
            placeholder="Enter Access Code"
            required="true"
          />
          </Segment>
        </Form.Field>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }}>
            <Button type='submit' 
            style={{ 
              background: 'linear-gradient(90deg, #660000, #ff5050)', 
              color: '#fff', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              fontFamily: 'Orbitron, sans-serif', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)', 
              cursor: 'pointer', 
              transition: 'transform 0.3s, box-shadow 0.3s',
              fontFamily: 'Anta'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
            }}
            >Submit</Button>
            <Button type='submit' style={{fontFamily: 'Anta'}} onClick={() => navigate('/home')}>Cancel</Button>
            </div>
          </Form>
        </Segment>
        <Image src='https://images.squarespace-cdn.com/content/v1/58b755102994cae144cde267/1488847126298-4N5ZM6OJDML7QTP15U2O/DropInZone_PeacePark2016_Blotto_07697.jpg?format=2500w' size='large' centered />
      </div>
      <Footer/>
    </>
  );
}

export default Signup;

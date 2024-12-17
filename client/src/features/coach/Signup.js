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

  const [visibleFields, setVisibleFields] = useState(['email']);

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

  const nextFieldsMap = {
    email: ['name'],
    name: ['team', 'password'], // Show both 'team' and 'password'
    team: ['password'],
    password: ['confirmpassword'],
    confirmpassword: ['accessCode'],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value.trim());
    formik.handleChange(e);

    const nextFields = nextFieldsMap[name];
    if (nextFields) {
      setVisibleFields([...new Set([...visibleFields, ...nextFields])]);
    }
  };

  const renderField = (name, label, type = "text", placeholder = "") => (
    <Form.Field
      style={{
        height: visibleFields.includes(name) ? 'auto' : '0px',
        opacity: visibleFields.includes(name) ? 1 : 0,
        transition: 'height 0.5s ease, opacity 0.5s ease',
        overflow: 'hidden',
        marginBottom: visibleFields.includes(name) ? '10px' : '0px',
      }}
    >
      <Segment style={{ background: 'black', border: "2px solid white", borderRadius: "20px" }}>
        <label style={{ fontFamily: "Anta", color: "white" }}>{label}</label>
        <input
          className='signup'
          id={name}
          name={name}
          type={type}
          onChange={handleInputChange}
          value={formik.values[name]}
          placeholder={placeholder}
          required
        />
      </Segment>
    </Form.Field>
  );

  const buttonStyles = {
    background: 'linear-gradient(90deg, #660000, #ff5050)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontFamily: 'Anta, Orbitron, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  return (
    <>
      <Head />
      <div className='registerModal'>
        <h1 style={{ color: 'white', textAlign: "center", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content' }}>Sign Up</h1>
        <Segment style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))', textAlign: 'center' }}>
          <Form onSubmit={formik.handleSubmit}>
            {renderField('email', 'Email', 'email', 'Enter Email')}
            {renderField('name', 'Name', 'text', 'Enter Name')}
            {renderField('team', 'Team (Optional)', 'text', 'Enter Team')}
            {renderField('password', 'Password', 'password', 'Enter Password')}
            {renderField('confirmpassword', 'Confirm Password', 'password', 'Confirm Password')}
            {renderField('accessCode', 'Access Code', 'text', 'Enter Access Code')}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
              <Button type='submit' style={buttonStyles}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Submit
              </Button>
              <Button onClick={() => navigate('/home')} style={{ fontFamily: 'Anta' }}>Cancel</Button>
            </div>
          </Form>
        </Segment>
        <Image src='https://images.squarespace-cdn.com/content/v1/58b755102994cae144cde267/1488847126298-4N5ZM6OJDML7QTP15U2O/DropInZone_PeacePark2016_Blotto_07697.jpg?format=2500w' size='large' centered />
      </div>
      <Footer />
    </>
  );
};

export default Signup;

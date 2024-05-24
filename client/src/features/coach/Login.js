import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentCoach, addError } from "./coachSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import { useToasts } from 'react-toast-notifications';
import Head from "../../components/Header";
import { Button, Divider, Form, Grid, Segment, Image } from 'semantic-ui-react';
import Footer from '../../components/Footer';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [isWideScreen, setIsWideScreen] = useState(false);
  const formSchema = yup.object().shape({
    email: yup.string().required("Please enter an email."),
    password: yup.string().required("Please enter a password.")
  });

  const handleNewError = useCallback((error) => {
    addToast(error, { appearance: 'error', autoDismiss: true });
  }, [addToast]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch('/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(res => {
          if (res.ok) {
            res.json().then(resObj => {
              dispatch(setCurrentCoach(resObj.coach));
              localStorage.setItem("jwt_token", resObj.token);
              localStorage.setItem("refresh_token", resObj.refresh_token);
            
            });
            
            navigate('/coachespage');
          } else {
            res.json().then(errorObj => {
              dispatch(addError(errorObj.message));
              handleNewError(errorObj.message);
            });
          }
        })
        .catch(error => {
          dispatch(addError(error));
          handleNewError(error);
        });
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    // Call handleResize when the component mounts and when the window resizes
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
   <>
      <Head />
      <div className='loginModal'>
      <h1 style={{ color: 'white', textAlign: "center", color: 'white', fontFamily: "Anta", backgroundColor: 'black', padding: '5px 10px', borderRadius: '10px', border: '2px solid white', width: 'fit-content'}}>Login</h1>
      <Segment placeholder style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))' }}>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form style={{textAlign: 'center'}} onSubmit={formik.handleSubmit} id='formikLogin'>
            <div style={{ background: 'black', border: "2px solid white", borderRadius: "20px", paddingBottom: "10px", marginBottom: '10px' }}>
              <Form.Input
                label={<label style={{ fontFamily: "Anta", color: "white" }}>Email</label>}
                id='email'
                className='loginInput'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter Email"
              />
             </div>
              <div style={{ background: 'black', border: "2px solid white", borderRadius: "20px", paddingBottom: "10px" ,marginTop: "25px", marginBottom: '25px' }}>
              <Form.Input
                label={<label style={{ fontFamily: "Anta", color: "white" }}>Password</label>}
                id='password'
                className='loginInput'
                type='password' onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter Password"
              />
              </div>
              <Button content='Login' type="submit"  style={{background: 'red', fontFamily: 'Anta', color: 'white'}} />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Button content='Sign up' icon='signup' size='big' onClick={() => navigate('/signup')} />
          </Grid.Column>
        </Grid>

        {isWideScreen && <Divider vertical className="custom-divider" style={{ fontFamily: 'Anta', color: 'white'}}>Or</Divider>}

      </Segment>
      <div id="loginImage">
      <Image src='https://stokedrideshop.com/cdn/shop/articles/Ayumu_Hirano.jpg?v=1659564082' size='large' centered margin-bottom="57px"/>
      </div>
    </div>
    <Footer/>
    </>
  );
};

// const Login = () => {
//   return (
//     <ToastProvider>
//       <LoginContent />
//     </ToastProvider>
//   );
// };

export default Login;

import { Segment, Image, Grid } from 'semantic-ui-react'
import Head from "./Header";
import EmailForm from './EmailForm';


const src = '/images/wireframe/image-text.png'

const Contact = () => {
  return (
    <>
      <Head/>
      <div className='contactModal'>
      <Grid.Column width={12}>
      <Segment id="emailContainer" centered>
        <h1 style={{fontFamily: "Anta"}}>Contact Form</h1>
        <p style={{fontFamily: "Anta", textAlign: 'center'}}>If you are interested in our services or have any questions, comments, or concerns about our services, please feel free to contact us.</p>
            <p style={{fontFamily: "Anta", textAlign: 'center'}}>Our team will be happy to assist you!</p>
        <EmailForm/>
      </Segment>
      </Grid.Column>
    </div>
    </>
  )
}

export default Contact;
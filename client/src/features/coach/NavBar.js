import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import EditCoachForm from './EditCoachForm'
import AddAthleteForm from "../athlete/AddAthleteForm"
import AthleteCards from "../athlete/AthleteCards"
import BookAppointment from "../appointment/BookAppiontment";
import CoachAppointments from "../appointment/CoachAppointments";

const MenuExampleTabularOnLeft = () => {
  const location = useLocation();
  const [menuState, setMenuState] = useState({activeItem: 'athletes'})

  const handleItemClick = (e, { name }) => setMenuState({ activeItem: name })

  const { activeItem } = menuState

  useEffect(() => {
    if (location.pathname === '/editathlete') {
      setMenuState({ activeItem: 'add-athlete' });
    } else {
      setMenuState({ activeItem: 'athletes' });
    }
  }, [location.pathname]);

    if (activeItem === 'book-services') {
      return (
        <div style={{ marginTop: '20px', marginBottom: "111px" }}>
        <Grid style={{padding: '0px', width: '100%'}}>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular style={{ background: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <Menu.Item
              name='athletes'
              active={activeItem === 'athletes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='book-services'
              active={activeItem === 'book-services'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='view-past-tunes'
              active={activeItem === 'view-past-tunes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='add-athlete'
              active={activeItem === 'add-athlete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit-account'
              active={activeItem === 'edit-account'}
              onClick={handleItemClick}
            />
          </Menu>
          
        </Grid.Column >
        <div style={{width: '75vw'}}>
        <Segment style={{ width: '100%' }}>
         <BookAppointment handleItemClick={handleItemClick}/>
        </Segment>
        </div>   
      </Grid>
        </div>
    )}

    if (activeItem === 'view-past-tunes') {
      return (
        <div style={{ marginTop: '20px', marginBottom: "111px" }}>
        <Grid style={{padding: '0px', width: '100%'}}>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular style={{ background: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <Menu.Item
              name='athletes'
              active={activeItem === 'athletes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='book-services'
              active={activeItem === 'book-services'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='view-past-tunes'
              active={activeItem === 'view-past-tunes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='add-athlete'
              active={activeItem === 'add-athlete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit-account'
              active={activeItem === 'edit-account'}
              onClick={handleItemClick}
            />
          </Menu>
          
        </Grid.Column >
        <div style={{width: '75vw'}}>
        <Segment style={{ width: '100%' }}>
         <CoachAppointments handleItemClick={handleItemClick}/>
        </Segment>
        </div>   
      </Grid>
        </div>
    )}

    if (activeItem === 'add-athlete') {
      return (
        <div style={{ marginTop: '20px', marginBottom: "111px" }}>
        <Grid style={{padding: '0px', width: '100%'}}>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular style={{ background: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <Menu.Item
              name='athletes'
              active={activeItem === 'athletes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='book-services'
              active={activeItem === 'book-services'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='view-past-tunes'
              active={activeItem === 'view-past-tunes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='add-athlete'
              active={activeItem === 'add-athlete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit-account'
              active={activeItem === 'edit-account'}
              onClick={handleItemClick}
            />
          </Menu>
          
        </Grid.Column >
        <div style={{width: '75vw'}}>
        <Segment style={{ width: '100%' }}>
         <AddAthleteForm handleItemClick={handleItemClick}/>
        </Segment>
        </div>   
      </Grid>
        </div>
    )}

    if (activeItem === 'edit-account') {
      return (
        <div style={{ marginTop: '20px', marginBottom: "111px" }}>
        <Grid style={{padding: '0px', width: '100%'}}>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular style={{ background: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <Menu.Item
              name='athletes'
              active={activeItem === 'athletes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='book-services'
              active={activeItem === 'book-services'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='view-past-tunes'
              active={activeItem === 'view-past-tunes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='add-athlete'
              active={activeItem === 'add-athlete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit-account'
              active={activeItem === 'edit-account'}
              onClick={handleItemClick}
            />
          </Menu>
          
        </Grid.Column >
        <div style={{width: '75vw'}}>
        <Segment style={{ width: '100%' }}>
         <EditCoachForm handleItemClick={handleItemClick}/>
        </Segment>
        </div>   
      </Grid>
        </div>
    )}

    return (
      <div style={{ marginTop: '20px', marginBottom: "111px" }}>
        <Grid style={{padding: '0px', width: '100%'}}>
        <Grid.Column width={4}>
        <Menu fluid vertical tabular style={{ background: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <Menu.Item
              name='athletes'
              active={activeItem === 'athletes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='book-services'
              active={activeItem === 'book-services'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='view-past-tunes'
              active={activeItem === 'view-past-tunes'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='add-athlete'
              active={activeItem === 'add-athlete'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='edit-account'
              active={activeItem === 'edit-account'}
              onClick={handleItemClick}
            />
          </Menu>
          
        </Grid.Column >
        <div style={{width: '75vw'}}>
        <Segment style={{ width: '100%' }}>
         <AthleteCards handleItemClick={handleItemClick}/>
        </Segment>
        </div>   
      </Grid>
        </div>
    )
  }



export default MenuExampleTabularOnLeft;

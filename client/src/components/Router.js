import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Title from "./Title";
import Signup from '../features/coach/Signup';
import Login from '../features/coach/Login';
import Error from './Error';
import UserHome from '../features/coach/UserHome';
import Services from "./Services";
import Contact from "./Contact";
import AthleteSpotlight from "./AthleteSpotlight";
import Gallery from "./Gallery"
import Shop from "./Shop";
import SnowConditions from "./ConditionChecker";

function Router() {
  const routes = (
    <>
      <Route path='/' element={<LandingPage/>} />,
      <Route path='/about' element={<Title/>} />,
      <Route path='/login' element={<Login/>} />,
      <Route path='/signup' element={<Signup/>} />,
      <Route path='/coachespage' element={<UserHome/>} />,
      <Route path='/tuningservices' element={<Services/>} />,
      <Route path='/contact' element={<Contact/>}/>,
      <Route path="/athletespotlight" element={<AthleteSpotlight/>}/>,
      <Route path='/gallery' element={<Gallery/>}/>,
      <Route path='/shop' element={<Shop/>}/>,
      <Route path='/snow-conditions' element={<SnowConditions/>}/>
    </>
  )
  return (
    <>
      <Routes>
        {routes}
        <Route path="/:error" element={<Error />} />
      </Routes>
    </>
  )
}

export default Router;
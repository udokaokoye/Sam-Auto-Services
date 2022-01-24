import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import AboutUs from './Pages/About US/AboutUs';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/Contact Us/ContactUs';
import Home from "./Pages/Home/Home";
import Services from './Pages/Services/Services';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
          <Nav />
          <Home />
          <Footer />
        </Route>

        <Route key={'/about'} exact path={'/about'}>
          <Nav />
          <AboutUs />
          <Footer />
        </Route>

        <Route key={'/services'} exact path={'/services'}>
          <Nav />
          <Services />
          <Footer />
        </Route>

        <Route key={'/contact'} exact path={'/contact'}>
          <Nav />
          <ContactUs />
          <Footer />
        </Route>

        <Route key={'/appointment'} exact path={'/appointment'}>
          <Nav />
          <Appointment />
          {/* <Footer /> */}
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import AboutUs from './Pages/About US/AboutUs';
import Home from "./Pages/Home/Home";

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
          {/* <br /> */}
          <Footer />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;

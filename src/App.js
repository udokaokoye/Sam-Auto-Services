import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
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
      </React.Fragment>
    </Router>
  );
}

export default App;

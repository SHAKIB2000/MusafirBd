import React from 'react';
import Nav from './Navbar/nav';
import Foot from './Footer/foot';
import Home from "./Home";
import Contact from "./ContactUs/Contact"
import Reg from "./Registration/Registration"
import Login from "./Login/login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";


function App() {
    return (
        <>
        <Nav />
        {/* <Nav />  */}
        <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/reg" component={Reg} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                
            </Switch>
        {/* <Banner />
        <Zilla />
        <Card />
        <Foot /> */}
        <Foot />
      
        </>
    );
  }
  export default App;
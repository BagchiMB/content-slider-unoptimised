
import React from 'react';

import './App.css';
import Home from './comonents/Home'
import How from './comonents/How'
import Features from './comonents/Features'
import OnBoarding from './comonents/OnBoarding/OnBoarding.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Router, Route, Switch } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';



function App() {

  const [open,setOpen]=React.useState(false)

  const handleClose = () => 
  {
      setOpen(false)
  }
  const handleOpen = () =>
  {
      setOpen(true)
  }

  return (
    <div >
      <Router   basename='/staging/mvp'>
     
      {/* <Router > */}
        <Switch>

        <Route exact path="/Onboarding" render={(props)=>(<OnBoarding {...props} open={open} handleOpen={handleOpen} handleClose={handleClose}/>)}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/How" component={How}></Route>
        <Route exact path="/Features" component={Features}></Route>
          </Switch>
      
      </Router>
    </div>
  );
}

export default App;
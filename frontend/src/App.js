import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Axios from "axios";

//IMPORTING ALL THE COMPONENTS 
import Header  from './Components/Header'
import Homepage from './Components/HomePage'
import Login from './Components/Login'

import ForParent from './Components/ForParents/ForParents'
import ForNannies from './Components/ForNannies/ForNannies'
import RegisterParent from './Components/ForParents/RegisterParent'
import RegisterNannies from './Components/ForNannies/RegisterNanny'



// import ParentsAccount from './Components/ForParents/ParentsAccount'

export default function App() {
return (
    <>
    <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Homepage" component={Homepage} />
            <Route path="/ForParents" component={ForParents} />
            <Route path="/ForNannies" component={ForNannies} />
            <Route path="/RegisterParent" component={RegisterParent} />
            <Route path="/RegisterNannies" component={RegisterNannies} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
  
    </BrowserRouter>
  </>
);
}
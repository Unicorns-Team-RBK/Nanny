import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//IMPORTING ALL THE COMPONENTS 
// import Navbar1 from '../src/Components/Navbar1'
// import Navbar2 from '../src/Components/Navbar2'
// import Homepage from './Components/HomePage'
// import ForParent from './Components/ForParents/ForParents'
// import ForNannies from './Components/ForNannies/ForNannies'
import NanniesForm from './Components/ForNannies/NanniesForm'
//import NanniesAccount from './Components/ForNannies/NanniesAccount'
//import ParentsForm from './Components/ForParents/ParentsForm'
//import ParentsAccount from './Components/ForParents/ParentsAccount'

ReactDOM.render(
  <NanniesForm />,
  document.getElementById('root')
);




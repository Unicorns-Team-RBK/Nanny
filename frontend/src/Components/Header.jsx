import '../Components/Css files/Header.css'
import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from './AuthOptions'

export default function Header () {
    return (
      <header id="header">
        <Link to="/">
        {/* <img class="logo" src="https://www.logodesign.net/logo-new/nanny-with-baby-carriage-8236ld.png?size=1" alt="logo"></img> */}
      <h1>Welcome To NANNY</h1>
     </Link>
      <nav>
        <ul>
            <li id="headforpar"><a href="http://localhost:3000/ForParents"> FOR PARENTS </a></li>
            <li id="headfornan"><a href="http://localhost:3000/ForNannies"> FOR NANNIES </a></li>
        </ul>
     </nav>
      <AuthOptions/>
     </header>
    );
  }
  

import '../Components/Css files/Header.css'
import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from './AuthOptions'

export default function Header () {
    return (
      <header id="header">
        <Link to="/">
        <img class="logo" src="https://www.logodesign.net/logo-new/nanny-with-baby-carriage-8236ld.png?size=1" alt="logo"></img>
      
       </Link> 
       <nav>
        <ul>
            <li><a href="/ForParents"> FOR PARENT </a></li>
            <li><a href="/ForNannies"> FOR NANNIES </a></li>
        </ul>
     </nav>
     
      <AuthOptions/>
     </header>
    );
  }
  

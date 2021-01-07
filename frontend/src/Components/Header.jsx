import '../Components/Css files/Header.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Header () {
    return (
      <header id="header">
        <Link to="/">
        <img class="logo" src="https://www.logodesign.net/logo-new/nanny-with-baby-carriage-8236ld.png?size=1" alt="logo"></img>
      <nav>
        <ul>
            <li><a href="#"> FOR PARENT </a></li>
            <li><a href="#"> FOR NANNIES </a></li>
            <li><a href="#"> LOGIN </a></li>
            <li><a href="#"> SINUP </a></li>
        </ul>
     </nav>
     </Link>
     </header>
    );
  }
  

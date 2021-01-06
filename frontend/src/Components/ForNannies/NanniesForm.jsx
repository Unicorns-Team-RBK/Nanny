import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
export default function NanniesForm  () {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  // const [error, setError] = useState();
  
  const history = useHistory();
  
  
  
  
  
  return (
        <div className="page">
        <h2>NANNIES FORM </h2>
        <form className="form">
        <label htmlFor="register-display-name">First Name</label>
          <input
            id="register-display-name"
            type="text"
          />
           <label htmlFor="register-display-name">Last name</label>
          <input
            id="register-display-name"
            type="text"
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
          />
  
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
          />
          <input
            type="password"
            placeholder="Verify password"
          />
          <input type="submit" value="Register" />
 
           <div className="columns text-center">
            <h5>Tell us something about yourself</h5>
            <textarea id="about_nanny" className="not required" placeholder="what are you good at ?why a parent will prefer you over other nannies ?" rows="10" cols="150" name="aboutnany"></textarea>
            </div>
          
        </form>
          </div>
       
    );
}


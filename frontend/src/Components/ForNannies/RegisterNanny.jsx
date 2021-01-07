/*todelete*/
import React, { useState} from "react";
import "../Css files/NanniesForm.css"
export default function RegisterNannies  () {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  return (
        <div className="page">
        <h2>NANNIES FORM </h2>
        <form className="form">
          <div>
        <label htmlFor="register-display-name">First Name</label>
        </div>
        <div>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayFirstName(e.target.value)}
          />
          </div>
          <div>
           <label htmlFor="register-display-name">Last name</label>
           </div>
           <div>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayLastName(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="register-email">Email</label>
          </div>
          <div>
          <input
            id="register-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="register-password">Password</label>
          </div>
          <div>
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div>
          <input
            type="password"
            placeholder="Verify password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          </div>
 
 
           <div className="columns text-center">
            <h5>Tell us something about yourself</h5>
            <textarea id="about_nanny" placeholder="what are you good at ?why a parent will prefer you over other nannies ?" rows="10" cols="150" name="aboutnany"></textarea>
            </div>
            <div>
          <input type="submit" value="Register" />
          </div>
        </form>
          </div>
       
    );
}


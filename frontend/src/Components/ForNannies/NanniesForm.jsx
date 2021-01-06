import React, { useState} from "react";

export default function NanniesForm  () {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  return (
        <div className="page">
        <h2>NANNIES FORM </h2>
        <form className="form">
        <label htmlFor="register-display-name">First Name</label>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayFirstName(e.target.value)}
          />
           <label htmlFor="register-display-name">Last name</label>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayLastName(e.target.value)}
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Verify password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
 
           <div className="columns text-center">
            <h5>Tell us something about yourself</h5>
            <textarea id="about_nanny" placeholder="what are you good at ?why a parent will prefer you over other nannies ?" rows="10" cols="150" name="aboutnany"></textarea>
            </div>
<<<<<<< HEAD
            <div class="wrap">
            <div class="row">
				<div class="columns text-center">
					<input class="btn submit" type="submit" value="Submit Application"></input>
				</div>
			</div>
            </div>
=======
          
          <input type="submit" value="Register" />
>>>>>>> a5eac5f2ba50745981366edabb38b01f859e6ef1
        </form>
          </div>
       
    );
}


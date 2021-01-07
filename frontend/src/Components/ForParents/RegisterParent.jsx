import React, { useState} from "react";
export default function RegisterParent () {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
    return (
        <div className="page">
        <h2>WELCOME TO MY GOOD NANNY</h2>
        <h4>Parents: create your account </h4>
        <p class="registration__info">Already have an account? <a href="#">Log in</a>.</p>
        <form className="form" >
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
  
          <input type="submit" value="Register" />
        </form>
      </div>
    )
}

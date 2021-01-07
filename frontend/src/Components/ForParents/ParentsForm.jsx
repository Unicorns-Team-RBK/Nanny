import React, { useState } from "react";
import "../Css files/ParentsForm.css"
export default function ParentsForm() {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  return (
    <div className="page">
      <h2>WELCOME TO MY GOOD NANNY</h2>
      <h4>Parents: create your account </h4>
      <p className="registration__info">Already have an account? <a href="#">Log in</a>.</p>
      <form className="form" >
        <label htmlFor="register-display-name">First Name</label>
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
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ParentContext from '../ParentContext'

export default function Login () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(ParentContext);
  const history = useHistory();

  return (
  <div>
    <div className="page">
      <h2>Log in</h2>
      <form className="form">
        <div>
        <label htmlFor="login-email">Email</label>
</div>
<div>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
       </div> 
      <div>
        <label htmlFor="login-password">Password</label>
        </div>
        <div>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <div>
        <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
    
    
    </div>
  )
}
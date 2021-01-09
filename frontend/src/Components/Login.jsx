import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ParentContext from "../ParentContext";
import Axios from "axios";
import "../Components/Css files/login.css"

export default function Login () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setParentData } = useContext(ParentContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    
    try{
       const loginParent = {email, password};
       
      const loginRes = await Axios.post("http://localhost:5000/parent/login", loginParent);
      setParentData({
        token : loginRes.data.token,
        parent : loginRes.data.parent,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push('/')

     } catch (err) {
      console.log("ERROR", err)
    }
  }

  return (
  <div>
    <div className="page">
      <h2>Log in</h2>
      <form className="form" onSubmit = {submit} >
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
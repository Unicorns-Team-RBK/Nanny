import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ParentContext from "../../ParentContext";
import "../Css files/ParentsForm.css"


export default function RegisterParent () {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const { setParentData } = useContext(ParentContext)
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault();
    
    try{
       const newParent = {firstName, lastName, email, password, passwordCheck};
       await Axios.post("http://localhost:5000/parent/RegisterParent", newParent);
       
      const loginRes = await Axios.post("http://localhost:5000/parent/login", {email, password});
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
    <div className="page">
      <h2>WELCOME TO MY GOOD NANNY</h2>
      <h4>Parents: create your account </h4>

      <p className="registration__info">Already have an account? <a href="#">Log in</a>.</p>

      <form className="form" onSubmit = {submit} >

        <label htmlFor="register-display-name">First Name</label>
        <div>
          <input
            id="register-display-name"
            type="text"
            name="firstName"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="register-display-name">Last name</label>
        </div>
        <div>
          <input
            id="register-display-name"
            type="text"
            name = "lastName"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="register-email">Email</label>
        </div>
        <div>
          <input
            id="register-email"
            type="email"
            name= "email"
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
            name = "password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name = "password"
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

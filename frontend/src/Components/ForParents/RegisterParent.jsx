import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ParentContext from "../../ParentContext";
import ErrorNotice from "../ErrorNotice";
import "../Css files/ParentsForm.css"


export default function RegisterParent() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setParentData } = useContext(ParentContext)
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newParent = { firstName, lastName, email, password, passwordCheck };
      await Axios.post("http://localhost:5000/parent/RegisterParent", newParent);

      const loginRes = await Axios.post("http://localhost:5000/parent/login", { email, password });
      setParentData({
        token: loginRes.data.token,
        parent: loginRes.data.parent,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push('/')

    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }

  return (
    <div className="page">

      {/* <h2 id="titleform">WELCOME TO MY GOOD NANNY</h2> */}
      <div>
        {/* <h4 id="subtitleone">Parents: create your account </h4> */}

        {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}

      </div>

      <form className="Parentform" onSubmit={submit} >
        <div id="register">
          <label >First Name</label>
          <div>
            <input

              type="text"
              name="firstName"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>

        </div>
        <div id="register">
          <div>
            <label >Last name</label>
          </div>
          <div>
            <input

              type="text"
              name="lastName"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
        </div>
        <div id="register">
          <div>
            <label >Email</label>
          </div>
          <div>
            <input

              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div id="register">
          <div>
            <label >Password</label>
          </div>
          <div>
            <input

              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input

              type="password"
              name="password"
              placeholder="Verify password"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </div>
        </div>
        <div>
          <input className="btnregister" id="register"  type="submit" value="Register" />
        </div>
      </form>
      <p id="subtitletwo">Already have an account? <a href="http://localhost:3000/login">Log in</a>.</p>

    </div>
  )
}

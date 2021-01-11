import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ParentContext from "../ParentContext";
import "../Components/Css files/AuthOptions.css";

export default function AuthOptions() {
const {parentData, setParentData} = useContext(ParentContext)
const history = useHistory();

const RegisterParent = () => history.push("/RegisterParent");
const login = () => history.push("/login");
const logout = () => {
  setParentData({
    token : undefined,
    parent : undefined
  })
  localStorage.clear()
  history.push('/')
}

  return (
    <nav className="auth-options">
      {
        parentData.token ? (
          <button id="Logout" onClick={logout}>Log out</button>
        ) : (
          <>
          <button id="Register" onClick={RegisterParent}>Register</button>
          <button id="Login" onClick={login}>Log in</button>
          </>
        )
      }
    
    </nav>
  );
}
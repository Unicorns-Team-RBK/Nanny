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
  localStorage.setItem( "auth-token", "")
}

  return (
    <nav className="auth-options">
      {
        parentData.parent ? (
          <button onClick={logout}>Log out</button>
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
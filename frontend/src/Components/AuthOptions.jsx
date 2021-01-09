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
}

  return (
    <nav className="auth-options">
      {
        parentData.token ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <>
          <button onClick={RegisterParent}>Register</button>
          <button onClick={login}>Log in</button>
          </>
        )
      }
    
    </nav>
  );
}
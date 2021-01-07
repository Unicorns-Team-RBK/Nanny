import React from "react";
import { useHistory } from "react-router-dom";
export default function AuthOptions() {

const history = useHistory();

const RegisterParent = () => history.push("/RegisterParent");
const login = () => history.push("/login");

  return (
    <nav className="auth-options">
    <button onClick={RegisterParent}>Register</button>
    <button onClick={login}>Log in</button>
    </nav>
  );
}
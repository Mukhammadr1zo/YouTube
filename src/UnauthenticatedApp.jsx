import React from "react";
import useToken from "./Hooks/useToken";
import "./Components/Login/Login.scss";
import Logo from "./Assets/images/Logo.svg";

function UnauthenticatedApp() {
  const [setIsLoggedIn] = useToken(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (data?.token) {
      setIsLoggedIn(data?.token);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <img className="login-logo" src={Logo} alt="logo" />
        <h3 className="login-header">Log in to YouTube</h3>
        <div>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Phone number, email address"
            defaultValue="eve.holt@reqres.in"
          />
        </div>

        <div>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            defaultValue="cityslicka"
          />
        </div>

        <button className="login-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default UnauthenticatedApp;

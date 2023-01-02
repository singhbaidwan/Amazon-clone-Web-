import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
  }

  function register(event) {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/440px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login--container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login--signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className="login--registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

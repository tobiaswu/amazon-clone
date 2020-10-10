import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2000px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Anmelden</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Passwort</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Anmelden
          </button>
        </form>

        <p>
          Mit Ihrer Anmeldung erklären Sie sich mit unseren Allgemeinen
          Geschäftsbedingungen einverstanden. Bitte lesen Sie unsere
          Datenschutzerklärung, unsere Hinweise zu Cookies und unsere Hinweise
          zu interessenbasierter Werbung.
        </p>
        <button onClick={register} className="login__registerButton">
          Erstellen Sie Ihr Amazon-Konto
        </button>
      </div>
      <div style={{ fontSize: "10px" }}>
        <a href="https://wupperfeld.org/impressum">Impressum</a>
        <a href="https://wupperfeld.org/datenschutz">Datenschutz</a>
      </div>
    </div>
  );
}

export default Login;

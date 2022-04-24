import "./LoginView.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";
import { TitleAndDescription } from "../../common/titleAndDescription/TitleAndDescription";
import { LOADING_MSG } from "../../../consts/sweetAlertMsg";
import { EMPTY_FIELDS, WRONG_DATA } from "./sweetAlertLoginObj";
import Accordion from "./accordion/Accordion";

const MySwal = withReactContent(Swal);

const data = {
  email: "challenge@alkemy.org",
  password: "react",
};

export default function LoginView() {
  const [email, setEmail] = useState({ email: "", valido: null });
  const [password, setPassword] = useState({ password: "", valido: null });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const expressiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
  };

  const validateEmail = () => {
    if (expressiones.email.test(email.email)) {
      console.log("email correcto");
      setEmail({ ...email, valido: true });
    } else {
      console.log("email incorrecto");
      setEmail({ ...email, valido: false });
    }
  };

  const validatePassword = () => {
    if (expressiones.password.test(password.password)) {
      console.log("password correcto");
      setPassword({ ...password, valido: true });
    } else {
      console.log("password incorrecto");
      setPassword({ ...password, valido: false });
    }
  };
  // This login is FAKE just for deploy purpose, you can see the original login in the folder doc/login
  const handleSubmit = async (e) => {
    e.preventDefault();
    MySwal.fire(LOADING_MSG);
    if (email.email === data.email && password.password === data.password) {
      localStorage.setItem("token", "token");
      MySwal.close();
      setEmail({ ...email, email: "" });
      setPassword({ ...password, password: "" });
      navigate(from, { replace: true });
    } else if (email.valido === null && password.valido === null) {
      MySwal.fire(EMPTY_FIELDS);
    } else if (
      (email.email !== data.email && email.email !== null) ||
      (password.password !== data.password && password.password !== null)
    ) {
      MySwal.fire(WRONG_DATA);
    }
  };
  return (
    <section>
      <TitleAndDescription
        title="Hotel La Montaña"
        description="Disfruta de tus vacaciones!"
      />
      <Accordion />
      <div className="box-style">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              autoComplete="off"
              onBlur={validateEmail}
              onChange={(e) => setEmail({ ...email, email: e.target.value })}
              value={email.email}
            />
            {email.valido === false && (
              <div className="boxErrors">
                <p className="error">El email no es correcto</p>
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onBlur={validatePassword}
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
              value={password.password}
            />
            {password.valido === false && (
              <div className="boxErrors">
                <p className="error">La password no es correcta</p>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login In
          </button>
        </form>
      </div>
    </section>
  );
}

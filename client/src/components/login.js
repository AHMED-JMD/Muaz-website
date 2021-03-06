import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/users/authContext";
import { ErrContext } from "../context/users/errContext";
import axios from "axios";

const Login = () => {
  //context state
  const { auth, SignINUser, SignOutUser } = useContext(AuthContext);
  const { err, GetErrors, ClearErrors } = useContext(ErrContext);
  //local state
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  // let[msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    //headers and body
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const User = { username, password };
    const body = JSON.stringify(User);
    //axios to server
    axios
      .post("/users/auth", body, config)
      .then((res) => {
        SignINUser(res.data);
        ClearErrors();
      })
      .catch((err) => {
        GetErrors(err.response.data, err.response.status, "login_err");
        SignOutUser();
      });
  };

  return (
    <div className="login">
      <div className="section">
        <div className="box mt-5">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="display-5 text-center">تسجيل الدخول </h1>
            {err.id === "login_err" ? (
              <div className="errMsg">{err.msg.msg}</div>
            ) : null}
            {auth.token ? (
              <div className="alert alert-success">
                <span> تم تسجيل الدخول بنجاح </span> <br />
                <Link className="btn btn8" to="/subjects">
                  {" "}
                  تصفح المواد
                </Link>
              </div>
            ) : null}
            <div className="form-group">
              <label className="label">اسم المستخدم </label>
              <input
                type="text"
                className="form-control"
                placeholder="ادخل اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>{" "}
            <br />
            <div className="form-group">
              <label className="label">كلمة السر</label>
              <input
                type="password"
                className="form-control"
                placeholder="كلمة السر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="text-center">
              <p>OR</p>
              {/* <button className="btn btn7 ">
                {" "}
                <img
                  src="./images/facebok-logo.png"
                  className="contact-img"
                  alt="facebok-logo"
                />{" "}
                سجل عن طريق فيسبوك{" "}
              </button> */}
              {/* <br /> <br /> */}
              <p>
                ليس لديك حساب ؟ <a href="/signup">سجل الان</a>
              </p>
              <button className="btn btn3">ارسل</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

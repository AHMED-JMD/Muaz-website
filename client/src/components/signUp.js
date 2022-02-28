import React, { useState, useContext } from "react";
import { AuthContext } from "../context/users/authContext";
import { ErrContext } from "../context/users/errContext";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const { auth, SignINUser, SignOutUser } = useContext(AuthContext);
  const { err, GetErrors, ClearErrors } = useContext(ErrContext);

  //state to manage form
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPas, setConfirmPas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //call to db
    let config = {
      headers: {
        "content-type": "application/json",
      },
    };
    let newUser = { name, username, password, confirmPas };
    const body = JSON.stringify(newUser);
    //axios to db
    axios
      .post("/users/register", body, config)
      .then((res) => {
        SignINUser(res.data);
        ClearErrors();
      })
      .catch((err) => {
        GetErrors(err.response.data, err.response.status, "register_err");
        SignOutUser();
      });
  };
  return (
    <div className="Signup">
      <div className="section">
        <div className="box mt-5">
          <form action="" onSubmit={handleSubmit}>
            {auth.isAuthenticated ? (
              <div className="alert alert-success">
                <span className="text-center"> تم تسجيل بنجاح </span> <br />
                <Link className="btn btn8" to="/login">
                  {" "}
                  سجل الدخول
                </Link>
              </div>
            ) : null}
            <h1 className="display-5 text-center"> تسجيل جديد </h1>
            <div className="form-group">
              <label className="label">الاسم</label>
              <input
                type="text"
                className="form-control"
                placeholder="ادخل الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>{" "}
            <br />
            <div className="form-group">
              <label className="label">اسم المستخدم</label>
              <input
                type="text"
                className="form-control"
                placeholder="اسم المستخدم"
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
            <div className="form-group">
              <label className="label">تأكيد كلمة السر</label>
              <input
                type="password"
                className="form-control"
                placeholder="تأكيد كلمة السر"
                value={confirmPas}
                onChange={(e) => setConfirmPas(e.target.value)}
              />
              <br />
              {/* display error message */}
              {err.id === "register_err" ? (
                <div className="errMsg">{err.msg.msg}</div>
              ) : null}
            </div>{" "}
            <br />
            <div className="text-center">
              <button className="btn btn3">ارسل</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

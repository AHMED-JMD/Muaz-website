import React, { useContext } from "react";
import { AuthContext } from "../context/users/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { auth, SignOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          اسم المنصة
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/subjects">
                تصفح المواد{" "}
              </Link>
            </li>

            {auth.isAuthenticated ? (
              auth.user.role === "basic" ? (
                <span>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/user-dashboard">
                      فيديوهاتي
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      onClick={() => {
                        SignOutUser();
                      }}
                      to="/"
                    >
                      تسجيل الخروج
                    </Link>
                  </li>
                </span>
              ) : (
                <span>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/admin-dashboard">
                      {" "}
                      لوحة التحكم{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className="nav-link active"
                      onClick={() => {
                        SignOutUser();
                      }}
                      to="/"
                    >
                      تسجيل الخروج
                    </Link>
                  </li>
                </span>
              )
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  تسجيل الدخول{" "}
                </Link>
              </li>
            )}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="ابحث عن المواد"
              aria-label="Search"
            />
            <button className="btn btn0 btn-secondary" type="submit">
              ادخل
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

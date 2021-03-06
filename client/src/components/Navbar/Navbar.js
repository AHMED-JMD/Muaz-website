import React, { useContext } from "react";
import { AuthContext } from "../../context/users/authContext";
import { Link } from "react-router-dom";
import Search from "./search";

const Navbar = () => {
  const { auth, SignOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="text-center">منصة</div> <div>استاذ معاذ</div>
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
                <>
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
                </>
              ) : (
                <>
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
                </>
              )
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  تسجيل الدخول{" "}
                </Link>
              </li>
            )}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

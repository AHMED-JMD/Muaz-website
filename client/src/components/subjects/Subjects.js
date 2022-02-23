import React, { useContext } from "react";
import { AuthContext } from "../../context/users/authContext";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import ScienceBook1 from "./scienceBook1";
import ScienceBook2 from "./scienceBook2";
import ArtBook from "./artBook";


const Subjects = () => {

  const { auth } = useContext(AuthContext);
  console.log(auth);
  return (
    <div className="homepage">
      <Navbar />

      {/* <!--header--> */}
      <div className="container-fluid cont6">
        <div className="text-center">
          <h1 className="display-3 h1">المواد</h1>
     
          <p>
            <Link className="sub-H" to="/">
              الرئيسية
            </Link>{" "}
            /{" "}
            <Link className="sub-H" to="/subject">
              المواد
            </Link>
          </p>
        </div>
      </div>

      {/* <!--end of header--> */}
      {/* <!--subject container--> */}
      <div className="cont-7">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="cont5">
              <h2 className="display-5 text-center sub-H1">
                {" "}
                الرياضيات المتخصصة
              </h2>
               <ScienceBook1 />
               <br /> <br />
               <ScienceBook2 />
            </div>
            {/* <!--subjects container ends here--> */}

            {/* <!--subject container2--> */}
            <div className="cont5 cont-5">
              <h2 className="display-5 text-center sub-H2">
                الرياضيات الاساسية
              </h2>
              <ArtBook />
            </div>
            {/* <!--subjects container ends here--> */}
          </div>
        </div>
      </div>

      <footer>حقوق الطبع محفوظة لصالح استاذ &copy;معاذ</footer>
    </div>
  );
};

export default Subjects;

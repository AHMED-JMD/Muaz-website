import React from "react";
import { Link } from "react-router-dom";

const ScienceBook2 = () => {
  return (
    <div className="row ">
      <h2 className="text-center mb-4">الكتاب الثاني</h2>
      {/* <!--card1--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=الاعداد المركبة">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الاعداد المركبة</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الاعداد المركبة"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
      {/* <!--card2--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=التفاضل">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب التفاضل</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=التفاضل"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
      {/* <!--card3--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=التكامل">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب التكامل</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=التكامل"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
      {/* <!--card4--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=الدائرة">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الدائرة</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الدائرة"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
      {/* <!--card5--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=الدوال">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الدوال</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الدوال"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
      {/* <!--card5--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=تطبيقات التفاضل">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب تطبيقات التفاضل</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=تطبيقات التفاضل"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}
    </div>
  );
};

export default ScienceBook2;

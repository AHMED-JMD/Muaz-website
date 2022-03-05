import React from "react";
import { Link } from "react-router-dom";

const ArtBook = () => {
  return (
    <div className="row">
      {/* <!--card1--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=أدبي&chapter=الدوال الحقيقة والنهايات">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الدوال الحقيقية والنهايات</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=الدوال الحقيقية والنهايات"
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
          <Link to="/subjects-name?kind=أدبي&chapter=التفاضل">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب التفاضل</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=التفاضل"
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
          <Link to="/subjects-name?kind=أدبي&chapter=التكامل">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب التكامل</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=التكامل"
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
          <Link to="/subjects-name?kind=أدبي&chapter=الاحصاء">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الاحصاء</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=الاحصاء"
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
          <Link to="/subjects-name?kind=أدبي&chapter=الاحتمالات">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الاحتمالات</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=الاحتمالات"
              className="btn btn8"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
      {/* <!--ends here--> */}

      {/* <!--card1--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=أدبي&chapter=المصفوفات">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب المصفوفات</p>
            </h5>
            <Link
              to="/subjects-name?kind=أدبي&chapter=المصفوفات"
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

export default ArtBook;

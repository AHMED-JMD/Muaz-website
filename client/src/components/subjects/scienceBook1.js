import React from "react";
import { Link } from "react-router-dom";

const ScienceBook1 = () => {
  return (
    <div className="row ">
      <h2 className="text-center mb-4">الكتاب الأول</h2>
      {/* <!--card1--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <Link to="/subjects-name?kind=علمي&chapter=الاحتمالات">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الاحتمالات</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الاحتمالات"
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
          <Link to="/subjects-name?kind=علمي&chapter=الاحصاء">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الاحصاء</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الاحصاء"
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
          <Link to="/subjects-name?kind=علمي&chapter=الكسور">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب الكسور</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=الكسور"
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
          <Link to="/subjects-name?kind=علمي&chapter=المصفوفات">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب المصفوفات</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=المصفوفات"
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
          <Link to="/subjects-name?kind=علمي&chapter=مبدأ العد">
            <img src="./images/4-rm.png" className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <p> باب مبدأ العد</p>
            </h5>
            <Link
              to="/subjects-name?kind=علمي&chapter=مبدأ العد"
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
export default ScienceBook1;

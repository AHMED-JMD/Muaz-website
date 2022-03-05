import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/users/authContext";

const SubjectsName = () => {
  let [searchParams, setSearchPrams] = useSearchParams();
  let [datdeleted, setDatdeleted] = useState(false);
  let [ordered, setOrdered] = useState(false);
  let [err, setErr] = useState();
  const { auth } = useContext(AuthContext);

  let kind = searchParams.get("kind");
  let chapter = searchParams.get("chapter");

  const [video, setVideo] = useState([]);

  //function to delete video
  const deletVideo = (videoId) => {
    let token = auth.token;

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    let data = { videoId };
    axios
      .post("/v1/vedios/delete-video", data, config)
      .then((res) => setDatdeleted(!datdeleted))
      .catch((err) => setErr(err.response.data));
  };
  //function to order videos
  const OrderVideo = (videoId, userId) => {
    let data = { videoId, userId };

    axios
      .post("/v1/orders/", data)
      .then((res) => {
        console.log(res);
        setOrdered(true);
      })
      .catch((err) => {
        console.log(err);
        setOrdered(false);
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let body = { kind, chapter };

    //post to database
    axios
      .post("/v1/vedios", body, config)
      .then((res) => {
        setVideo(res.data.videos);
      })
      .catch((err) => console.log(err));
  }, [datdeleted]);

  return (
    <div className="subjectDetails">
      {/* <!--header--> */}
      <div className="container-fluid cont6">
        <div className="text-center">
          <h1 className="display-3 "> التفاصيل</h1>
          <p>
            <Link className="sub-H" to="/">
              الرئيسية
            </Link>{" "}
            /{" "}
            <Link className="sub-H" to="/subjects">
              المواد
            </Link>
          </p>
        </div>
      </div>

      {/* <!--end of header--> */}

      <div className=" cont10">
        <div className="row">
          {ordered ? (
            <h4
              className={` alert alert-success back-message ${
                ordered ? "back-message-anim" : null
              }`}
            >
              تم طلب الفيديو بنجاح الرجاء التواصل عن طريق االايميل او الهاتف
              الموجودة على الصفحة الرئيسية{" "}
            </h4>
          ) : null}
          {video.length ? (
            video.map((video1) => {
              return (
                <div className="col-lg-4 col-md-5 col-sm-12" key={video1._id}>
                  <div className="card">
                    <div className="card-header">
                      {video1.subject} {" باب"} {video1.chapter}
                    </div>
                    <div className="card-body video-body">
                      <h5 className="card-title">{video1.subName}</h5>
                      <p className="card-text">{video1.details}</p>
                      <span className="">السعر</span>
                      <p className="card-text"> {video1.price}جنيه</p>
                      {auth.isAuthenticated ? (
                        auth.user.role === "admin" ? (
                          <div>
                            <Link
                              to={`/subjects-details?id=${video1._id}`}
                              className="btn btn-primary"
                            >
                              شاهد الفيديو
                            </Link>
                            <button
                              type="button"
                              className="btn btn-danger delete-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              حذف
                            </button>

                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModal"
                                    >
                                      حذف الفيديو{" "}
                                    </h5>
                                  </div>
                                  <div className="modal-body">
                                    <p>هل انت متأكد برغبتك في حذف الفيديو</p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      الغاء
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger "
                                      data-bs-dismiss="modal"
                                      onClick={() => deletVideo(video1._id)}
                                    >
                                      حذف
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <button
                            className="btn btn-primary delete-btn"
                            onClick={() => OrderVideo(video1._id, auth.user.id)}
                          >
                            اطلب الفيديو
                          </button>
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="alert alert-success">
              لا يوجد فيديوهات انتظر قليلا
            </div>
          )}
        </div>
      </div>
      {auth.isAuthenticated ? null : (
        <div className="cont7">
          <p>
            {" "}
            <span>.ليس لديك حساب ؟ سجل لتتمكن من مشاهدة و شراء الفيديوهات</span>
            <Link className="btn btn-lg btn8" to="/login">
              {" "}
              تسجيل الدخول
            </Link>
          </p>
        </div>
      )}

      <footer>حقوق الطبع محفوظة لصالح استاذ &copy;معاذ</footer>
    </div>
  );
};

export default SubjectsName;

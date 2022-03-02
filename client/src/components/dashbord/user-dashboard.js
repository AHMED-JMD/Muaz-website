import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/users/authContext";
import { Link } from "react-router-dom";
import axios from "axios";

const UserDashboard = () => {
  const { auth } = useContext(AuthContext);

  const [video, setVideo] = useState([]);
  console.log(video);

  useEffect(() => {
    let token = auth.token;

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["x-auth-token"] = token;
    }
    if (auth.user) {
      let videosId = [];
      videosId = auth.user.videosId;
      const data = { videosId };
      console.log(data);

      axios
        .post("/v1/vedios/user-videos", data, config)
        .then((res) => {
          setVideo(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="user-dashboard">
      <div className="container-fluid header">
        <div className="text-center U-header">
          <h1 className="display-4 pt-3 "> شاهد الفيديوهات الخاصة بك</h1>
        </div>
      </div>

      {auth.isAuthenticated ? (
        <div className="u-body">
          {video.length ? (
            <div className="row">
              {video.map((userVideo) => {
                return (
                  <div
                    className="col-lg-4 col-md-5 col-sm-12"
                    key={userVideo._id}
                  >
                    <div className="card">
                      <div className="card-header">
                        {userVideo.subject} {" المادة"} {userVideo.chapter}
                      </div>
                      <div className="card-body video-body">
                        <h5 className="card-title">{userVideo.subName} </h5>
                        <p className="card-text">{userVideo.details}</p>
                        <span className="">السعر</span>
                        <p className="card-text"> {userVideo.price}جنيه</p>
                        <Link
                          to={`/subjects-details?id=${userVideo.link}`}
                          className="btn btn-primary"
                        >
                          شاهد الفيديو
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="alert alert-success">
              لايوجد لديك فيديوهات الان اطلب لتحصل على الفيديوهات
            </h3>
          )}
        </div>
      ) : (
        <h1 className="alert alert-danger u-body">
          يجب عليك تسجيل الدخول لمشاهدة الفيديوهات
        </h1>
      )}
    </div>
  );
};

export default UserDashboard;

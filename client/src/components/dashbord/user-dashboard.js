import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/users/authContext";
import { Link } from "react-router-dom";
import axios from "axios";

const UserDashboard = () => {
  const { auth } = useContext(AuthContext);

  const [render, setRender] = useState("");
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
      let videosId = auth.user.videosId;
      const data = { videosId };

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
          <button onClick={() => setRender("app rendered")}>
            render state
          </button>
        </div>
      </div>

      {auth.isAuthenticated ? (
        <div className="u-body">
          {video.length ? (
            <div>
              {video.map((userVideo) => {
                return (
                  <div className="card" key={userVideo._id}>
                    <div className="card-header">اسم الباب</div>
                    <div className="card-body video-body">
                      <h5 className="card-title">{userVideo.subName} </h5>
                      <p className="card-text">تفاصيل الفيديو</p>
                      <span className="">السعر</span>
                      <p className="card-text">400جنيه</p>
                      <Link
                        to={`/subjects-details?id=${userVideo.link}`}
                        className="btn btn-primary"
                      >
                        شاهد الفيديو
                      </Link>
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

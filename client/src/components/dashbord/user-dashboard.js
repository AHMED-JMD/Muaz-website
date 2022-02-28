import React, { useContext } from "react";
import { AuthContext } from "../../context/users/authContext";

const UserDashboard = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="user-dashboard">
      <div className="container-fluid header">
        <div className="text-center U-header">
          <h1 className="display-4 pt-3 ">تعلم وشاهد الفيديوهات الخاصة بك</h1>
        </div>
      </div>

      {auth.isAuthenticated ? (
        <div className="u-body">
          {auth.user.videosId ? (
            <div>
              {auth.user.videosId.map((video) => {
                return (
                  <div className="card" key={video._id}>
                    <div className="card-header">اسم الباب</div>
                    <div className="card-body video-body">
                      <h5 className="card-title">اسم الدرس</h5>
                      <p className="card-text">تفاصيل الفيديو</p>
                      <span className="">السعر</span>
                      <p className="card-text">400جنيه</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="alert alert-success">
              لايوجد لديك فيديوهات الان اطلب لتحصل على الفيديوهات
            </div>
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

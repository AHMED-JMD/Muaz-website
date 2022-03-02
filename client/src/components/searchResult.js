import React, { useState } from "react";

export default function SearchResult() {
  const [video, setVideo] = useState(null);
  return (
    <div className="search-result">
      <div className="result">
        {video ? (
          video.subName
        ) : (
          <h1 className="display-6 h1-result pt-5">
            {" "}
            <div>404</div>
            عفوا لم يتم ايجاد ما تبحث عنه الرجاء المحاولة مجددا{" "}
          </h1>
        )}
      </div>

      <div className="result-body mt-8">
        {video ? (
          <div className="card">
            <div className="card-header">
              {video.subject} {" المادة"} {video.chapter}
            </div>
            <div className="card-body video-body">
              <h5 className="card-title">{video.subName}</h5>
              <p className="card-text">{video.details}</p>
              <span className="">السعر</span>
              <p className="card-text"> {video.price}جنيه</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

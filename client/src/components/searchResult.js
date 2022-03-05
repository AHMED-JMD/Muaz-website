import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function SearchResult() {
  const [video, setVideo] = useState(null);
  let [searchParams, setSearchPrams] = useSearchParams();

  let subName = searchParams.get("subName");
  console.log(subName);

  useEffect(() => {
    let data = { subName };
    axios
      .post("/v1/vedios/searched-video", data)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="search-result">
      <div className="result">
        {video ? (
          <h1 className="display-5 h1-result pt-5">{video.subName}</h1>
        ) : (
          <h1 className="display-5 h1-result pt-5">
            {" "}
            <div>404</div>
            عفوا لم يتم ايجاد ما تبحث عنه الرجاء المحاولة مجددا{" "}
          </h1>
        )}
      </div>

      <div className="result-body mt-5">
        {video ? (
          <div className="card">
            <div className="card-header">
              {video.subject} {" باب"} {video.chapter}
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

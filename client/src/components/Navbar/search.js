import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dropdown.css";
import { v4 as uuidv4 } from "uuid";

const Search = () => {
  let [allData, setAllData] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [open, setOpen] = useState(false);
  let [selVal, setSelVal] = useState(null);
  let [query, setQuery] = useState("");
  console.log(allData);
  console.log(filterData);

  useEffect(() => {
    axios
      .get("/v1/vedios/all-videos")
      .then((res) => {
        setAllData(res.data);
        setFilterData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    if (!value) return;
    setOpen(true);

    const filter = new RegExp(`(${value})\w+`);
    console.log(filter);
    console.log(
      ["ahmed", "ali", "mohamed"].filter((data) => {
        console.log(filter.test(data));
      })
    );
  };
  return (
    <form className="d-flex">
      <div className="dropdown">
        <div className="control">
          <div className="selected-value">
            <input
              type="text"
              onChange={handleChange}
              placeholder={selVal ? selVal : "ابحث باسم المادة"}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={`arrow ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {filterData.map((data) => {
            return (
              <div
                className={`option ${
                  selVal === data.subName ? "selected" : null
                }`}
                key={uuidv4()}
                onClick={() => {
                  setSelVal(data.subName);
                  setOpen(false);
                }}
              >
                {data.subName}
              </div>
            );
          })}
        </div>
      </div>

      <button className="btn btn0 btn-secondary" type="submit">
        ادخل
      </button>
    </form>
  );
};

export default Search;

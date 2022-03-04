import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dropdown.css";
import Select from "react-dropdown-select";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();

  let [filterData, setFilterData] = useState([]);
  let [selVal, setSelVal] = useState(null);
  console.log(filterData);
  console.log(selVal);

  useEffect(() => {
    axios
      .get("/v1/vedios/all-videos")
      .then((res) => {
        console.log(res.data);
        setFilterData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selVal !== null) {
      return (
        <link
          to={navigate(
            `/search-result?subName=${selVal.map((selVal1) => selVal1.label)}`
          )}
        ></link>
      );
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <Select
        isSearchable
        options={filterData}
        className="react-select"
        placeholder="ابحث باسم المادة"
        onChange={(values) => {
          setSelVal(values);
        }}
      />
      <button className="btn btn0 btn-secondary" type="submit">
        ادخل
      </button>
    </form>
  );
};

export default Search;

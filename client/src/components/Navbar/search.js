import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dropdown.css";
import Select from "react-dropdown-select";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();

  let [filterData, setFilterData] = useState([]);
  let [selVal, setSelVal] = useState(null);

  useEffect(() => {
    axios
      .get("/v1/vedios/all-videos")
      .then((res) => {
        setFilterData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selVal !== null) {
      navigate(
        `/search-result?subName=${selVal.map((selVal1) => selVal1.label)}`
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

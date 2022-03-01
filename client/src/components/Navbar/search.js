import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  let [allData, setAllData] = useState([]);
  let [filterData, setFilterData] = useState([]);
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
    let result = [];

    result = allData.filter((data) => {
      return data.subName.Search(value) != -1;
    });

    setFilterData(result);
  };
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="ابحث عن المواد"
        aria-label="Search"
        onChange={(e) => handleChange(e)}
      />

      <button className="btn btn0 btn-secondary" type="submit">
        ادخل
      </button>
    </form>
  );
};

export default Search;

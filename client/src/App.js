import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Subjects from "./components/subjects/Subjects";
import Login from "./components/login";
import SignUp from "./components/signUp";
import SubjectsDetails from "./components/subjects/subjects-details";
import { AuthContext } from "./context/users/authContext";
import { ErrContext } from "./context/users/errContext";
import AdminDashboard from "./components/dashbord/adminDashbord";
import axios from "axios";
import SubjectsName from "./components/subjects/subject-name";
import Navbar from "./components/Navbar/Navbar";
import UserDashboard from "./components/dashbord/user-dashboard";
import SearchResult from "./components/searchResult";

function App() {
  const { auth, LoadUser, SignOutUser } = useContext(AuthContext);
  const { GetErrors } = useContext(ErrContext);
  const token = auth.token;

  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //check token existence
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    //call to db
    console.log(config);

    axios
      .get("/users/auth/get-user", config)
      .then((res) => {
        LoadUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        SignOutUser();
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/subjects" element={<Subjects />} />

        <Route path="/subjects-name" element={<SubjectsName />} />

        <Route path="/subjects-details" element={<SubjectsDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/user-dashboard" element={<UserDashboard />} />

        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;

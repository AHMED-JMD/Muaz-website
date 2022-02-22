import React, {  useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Subjects from './components/Subjects';
import Login from './components/login';
import SignUp from './components/signUp';
import SubjectsDetails from './components/subjects-details';
import AuthContextProvider, { AuthContext } from './context/users/authContext';
import ErrContextProvider, { ErrContext } from './context/users/errContext';
import AdminDashboard from './components/dashbord/adminDashbord';
import axios from 'axios';

function App() {

const {   SignINUser, SignOutUser } = useContext(AuthContext);
const { GetErrors } = useContext(ErrContext);  
const token = localStorage.getItem('token');

useEffect(() =>{

try{
  //setting headers
  let config = {
    headers: {
        "content-type" : "application/json"
    }
  };
//check token and add it to headers

if(token){
  config.headers["x-auth-token"] = token;
  }
  console.log(config)
  //get request to db
  axios.get('/users/auth/get-user',config)
   .then(res =>{
    SignINUser(res.data)
    console.log(res);
    
   }) 
   .catch(er =>{
     console.log(er);
    // GetErrors
    GetErrors(er.response.data, er.response.status)
    // SignOutUser
    SignOutUser();
  })
}catch(err) {
if(err){ 
  console.log(err);
 }
}

}, [token]);


  return(
 <div className='app'>   
 <AuthContextProvider>
 <ErrContextProvider>

  <Routes> 
  
      <Route path="/" element={ <HomePage /> } />
   
      <Route path="/subjects" element={ <Subjects /> } />

      <Route path="/subjects-details" element={<SubjectsDetails />} />
  
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<SignUp />} />
      
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

  </Routes>
 </ErrContextProvider> 
 </AuthContextProvider>   
  </div>
);
}

export default App;

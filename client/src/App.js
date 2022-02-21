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

const { auth, setAuth } = useContext(AuthContext);
const { err, setErr } = useContext(ErrContext);  
const token = auth.token;

useEffect(() =>{
  //setting headers
  let config = {
    headers: {
        "content-type" : "application/json"
    }
}
try{
//check token and add it to headers
console.log(token);
if(token){
  config.headers['x-auth-token'] = token
  }else{
    console.log('no token , token == null')
  }
  //get request to db
  axios.get('/users/auth/get-user',config)
   .then(user =>{
    console.log(user);
    setAuth({...auth, user, isAuthenticated:true, isLoading: false});
   }) 
   .catch(er =>{
     console.log(er);
    // GetErrors
    setErr({...err, msg: er.response.data, status: er.response.status, id: ''});

    // SignOutUser
    localStorage.removeItem('token');
    setAuth({...auth,
         user: null,
         token: null,
         isAuthenticated:false})
  })
}catch(err) {
if(err){ console.log(err) }
}

} ,[token, auth, err, setAuth, setErr])


  return (
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

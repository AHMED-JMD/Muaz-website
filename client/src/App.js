import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Subjects from './components/Subjects';
import Login from './components/login';
import SignUp from './components/signUp';
import SubjectsDetails from './components/subjects-details';
import AuthContextProvider from './context/users/authContext';
import ErrContextProvider from './context/users/errContext';

function App() {
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

  </Routes>
 </ErrContextProvider> 
 </AuthContextProvider>   
  </div>
  );
}

export default App;

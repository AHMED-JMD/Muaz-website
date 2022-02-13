// import  {useContext} from 'react';
// import { authContext } from '../context/users/authContext';
// import { ErrContext } from '../context/users/errContext';
// import axios from 'axios';

// const { SignInUser, SignOutUser} = useContext(authContext);
// const {GetErrors} = useContext(ErrContext);

// export const RegisterUser = (name, email, password, agreed='i agree', confirmPas) =>{
//     let config = {
//         headers:{
//             "contant-type" : "application/json"
//         }
//     };

//     const newUser = {name, email, password, agreed, confirmPas};
//     const body = JSON.stringify(newUser);

//     //send request to database
//     axios.post('/users/register',body, config )
//      .then(res =>{
//          SignInUser(res.data);
//      }).catch(err =>{
//          GetErrors(err.response.data, err.response.status, 'register_err');
//          SignOutUser()
//      })

// }
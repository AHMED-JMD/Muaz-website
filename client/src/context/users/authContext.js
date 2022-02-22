import React, {createContext,useState} from 'react';


export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    //define the context state
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
    //functions to modify state
    const SignINUser = (res) =>{
        localStorage.setItem('token', res.token);
        setAuth({...auth, ...res, isAuthenticated:true});
    }

    const SignOutUser = () =>{
        console.log('i work now');
        localStorage.removeItem('token');
        setAuth({...auth,
        user: null,
             token: null,
             isAuthenticated:false})
    }


    return(
        <AuthContext.Provider value={{auth, setAuth,SignINUser, SignOutUser} }>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider
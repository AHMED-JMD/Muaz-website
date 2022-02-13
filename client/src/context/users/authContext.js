import React, {createContext,useState} from 'react';


export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    //define the context state
    const [auth, setAuth] = useState({
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
    //functions to modify state
    const SignINUser = (res) =>{
        localStorage.setItem('token', res.token);
        setAuth({...auth, user: res.user, token: res.token, isAuthenticated:true});
    }

    const SignOutUser = () =>{
        localStorage.removeItem('token');
        setAuth({...auth,
             user: null,
             token: null,
             isAuthenticated:false})
    }

    const LoadUser = (user) =>{
        setAuth({...auth, user, isAuthenticated:true});
    }

    return(
        <AuthContext.Provider value={{auth, SignINUser, SignOutUser,LoadUser} }>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider
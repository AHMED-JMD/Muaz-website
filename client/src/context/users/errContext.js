import React, { createContext } from 'react';

export const ErrContext = createContext();

const ErrContextProvider = (props) =>{
    //define state
    let [err, setErr] = React.useState({
        msg: null,
        status: null,
        id: ''
    });
    //functions to modify state

  const GetErrors = (msg, status, id='') =>{
    setErr({...err, msg, status, id});
  }

  const ClearErrors = () =>{
      setErr({...err, msg:null, status: null, id:''});
  }

  return(
      <ErrContext.Provider value={{err, GetErrors, ClearErrors}}>
          {props.children}
      </ErrContext.Provider>
  )
}

export default ErrContextProvider
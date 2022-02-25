import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

const VideoContextProvider = (props) =>{
    //DEFINE VIDEO STATE
   const [video, setVideo] = useState({
    vedio: null, 
    isArrived: false
   });

   const AddVideo = (res) =>{
    setVideo({...video, ...res, isArrived: true});
   }

   const DeleteVideo = () =>{
       setVideo({ ...video, video:null  });
   }

   return(
       <VideoContext.Provider value={{video, AddVideo, DeleteVideo}}>
           {props.children}
       </VideoContext.Provider>
   )

}

export default VideoContextProvider;
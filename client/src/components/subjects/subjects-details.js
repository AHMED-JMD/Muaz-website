import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';

const SubjectsDetails = () =>{
  let [searchParams, setSearchParams] = useSearchParams()
  let id = searchParams.get('id');

  const [video, setVideo] = useState([])
console.log(video.link)

useEffect(() =>{
  let config = {
    headers:{
      "Content-Type": "application/json"
    }
  }
let body = { id }

axios.post('/v1/vedios/get-byID', body, config)
 .then(res =>{
   setVideo(res.data.video)
 }).catch(err => console.log(err))

} ,[])

 return(
<div className='subjectDetails'>
 


    {/* <!--header--> */}
<div className="container-fluid cont6">
    <div className="text-center">
     <h1 className="display-3 ">تفاصيل المادة</h1>
     <p ><Link className='sub-H' to="/">الرئيسية</Link> / <Link className='sub-H' to="/subjects-name">التفاصيل</Link></p>
    </div>
</div>        

    {/* <!--end of header--> */}

<div className="container cont9">

{video.link? 
      <div>
     <div className="detail-img">
     <h1 className='text-center'>حصة {video.subName}</h1>
     <video width="700" height="500" controls controlsList="nodownload">
      <source src={`/v1/vedios/stream-vedio?link=${video.link}`} type="video/mp4" />
     </video>
  </div>
  </div>
: <div className='alert alret-warning'>انتظر قليلا </div>}


</div>



 

<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>

</div>
 )
}

export default SubjectsDetails;
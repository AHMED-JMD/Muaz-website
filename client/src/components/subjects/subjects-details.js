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
 
<Navbar />

    {/* <!--header--> */}
<div className="container-fluid cont6">
    <div className="text-center">
     <h1 className="display-3 ">تفاصيل المادة</h1>
     <p ><Link className='sub-H' to="/">الرئيسية</Link> / <Link className='sub-H' to="/subjects-details">التفاصيل</Link></p>
    </div>
</div>        

    {/* <!--end of header--> */}

<div className="container cont5">
 <div className="row">
   <div className="col-md-8 col-sm-12">
{video.link? 
     <div className="detail-img">
     <video width="500" height="350" controls>
      <source src={`/v1/vedios/stream-vedio?link=${video.link}`} type="video/mp4" />
     </video>
  </div>
: <div className='alert alret-success'>انتظر قليلا </div>}

   </div>
 </div>
</div>



 

<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>

</div>
 )
}

export default SubjectsDetails;
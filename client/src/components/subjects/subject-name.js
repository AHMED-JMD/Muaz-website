import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';


const SubjectsName = () =>{
  let [searchParams, setSearchPrams] = useSearchParams();

  let kind = searchParams.get('kind');
  let chapter = searchParams.get('chapter');

  const [video, setVideo] = useState([])
  console.log(video)

  useEffect(() =>{
    const config = {
        headers:{
            "Content-Type": "application/json",
        }
    }
    let body = {kind, chapter};

    //post to database
    axios.post('/v1/vedios', body,config)
     .then(res =>{
        setVideo(res.data.videos);
     }).catch(err => console.log(err))
  }, []);
return(
<div className='subjectDetails'>
 
<Navbar />

    {/* <!--header--> */}
<div className="container-fluid cont6">
    <div className="text-center">
     <h1 className="display-3 "> التفاصيل</h1>
     <p ><Link className='sub-H' to="/">الرئيسية</Link> / <Link className='sub-H' to="/subjects-details">التفاصيل</Link></p>
    </div>
</div>        

    {/* <!--end of header--> */}

<div className="container cont10">
 <div className="row">
 <div className='col-lg-4 col-md-5 col-sm-12' >
   {video.length ?
   video.map(video1 =>{
     return(
      <div class="card" key={video1._id}>
      <div class="card-header">
        {video1.subject} {" المادة"} {video1.chapter}
      </div>
      <div class="card-body">
     <h5 class="card-title">{video1.subName}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to={`/subjects-details?id=${video1._id}`} class="btn btn8">Go somewhere</Link>
      </div>
    </div>
     )
   }) :
   <div className='alert alert-success'>لا يوجد فيديوهات انتظر قليلا</div> }     

 </div>
 </div>
</div>

<div className="cont7">
  <p > <span>.ليس لديك حساب ؟ سجل لتتمكن من مشاهدة و شراء الفيديوهات</span>
  <Link className="btn btn-lg btn8" to="/login"> تسجيل الدخول</Link>
  </p>
</div>

 

<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>

</div>
 )
}

export default SubjectsName;
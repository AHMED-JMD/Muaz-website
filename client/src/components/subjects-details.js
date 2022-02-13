import React from 'react';
import Navbar from './Navbar';


const SubjectsDetails = () =>{
 return(
<div className='subjectDetails'>
 
<Navbar />

    {/* <!--header--> */}
<div className="container-fluid cont6">
    <div className="text-center">
     <h1 className="display-3 ">تفاصيل المادة</h1>
     <p ><a className='sub-H' href="/">الرئيسية</a> / <a className='sub-H' href="/subjects-details">التفاصيل</a></p>
    </div>
</div>        

    {/* <!--end of header--> */}

<div className="container cont5">
 <div className="row">
   <div className="col-lg-7 col-md-5 col-sm-12">
     <div className="detail-text">
      <h1 className="diplay-5">التفاصيل</h1>
      <p> </p>
      <p>  الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارت , الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيار</p>
      <p> الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارت,  الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارت</p>
      <p> الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارت,  الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارت</p> 
    </div>
  </div>
   <div className="col-md-5 col-sm-12">
     <div className="detail-img">
        <video width="500" height="350" controls>
         <source src="./videos/1.mp4" type="video/mp4" />
        </video>
     </div>
   </div>
 </div>
</div>

<div className="cont7">
  <p > <span>.ليس لديك حساب ؟ سجل لتتمكن من مشاهدة و شراء الفيديوهات</span>
  <a  className="btn btn-lg btn8" href="/login"> تسجيل الدخول</a>
  </p>
</div>

 

<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>

</div>
 )
}

export default SubjectsDetails;
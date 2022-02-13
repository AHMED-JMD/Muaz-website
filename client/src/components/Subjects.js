import React from 'react';
import Navbar from './Navbar';


const Subjects = () =>{
 return(
<div className='homepage'>

<Navbar />

    {/* <!--header--> */}
<div className="container-fluid cont6">
    <div className="text-center">
     <h1 className="display-3 h1">المواد</h1>
     <p ><a className='sub-H' href="/">الرئيسية</a> / <a className='sub-H' href="/subject">المواد</a></p>
    </div>
</div>        

    {/* <!--end of header--> */}
    {/* <!--subject container--> */}
<div className="cont-7">
  <div className="row">
    <div className="col-lg-2 col-md-3 col-sm-12 form-cont">
      <form className="sub-form">
        <h3>تصنيف </h3>
        <input type="radio" id="revise" name="video_type" value="all" />
        <label htmlFor="revise"> الكل</label><br />
        <input type="radio" id="revise" name="video_type" value="REVISE" />
        <label htmlFor="revise">حصص مراجعة</label><br />
        <input type="radio" id="css" name="video_type" value="FOCUS" />
        <label htmlFor="focus">حصص تركيز</label><br />
        <input type="radio" id="revise" name="video_type" value="science" />
        <label htmlFor="revise">علمي</label><br />
        <input type="radio" id="revise" name="video_type" value="art" />
        <label htmlFor="revise"> أدبي</label><br />
        <button className="btn8">ارسل</button>
      </form>
    </div>
    <div className="col-lg-10 col-md-9 col-sm-12">

      <div className="cont5">
        <h2 className="display-5 text-center sub-H1" > الرياضيات المتخصصة</h2>
        <div className="row">
          <h3>الكتاب الاول</h3>
        {/* <!--card1--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" class="card-img-top" alt="..." /></a>
        <div className="card-body">
            <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
            <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
            {/* <!--card2--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card ">
            <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
              <a href="/subjects-details" className="btn btn8">التفاصيل</a>
              </div>
        </div>
      </div>
        {/* <!--ends here--> */}
           {/* <!--card3--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
        <div className="card-body">
          <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
          <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
                {/* <!--card4--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
        <div className="card-body">
          <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
          <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
    
      </div>

    </div>
        {/* <!--subjects container ends here--> */}
    
            {/* <!--subject container2--> */}
    <div className="cont5 cont-5">
        <h2 className="display-5 text-center sub-H2" >الرياضيات الاساسية</h2>
        <div className="row r1">
        {/* <!--card1--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
        <div className="card-body">
          <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
          <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
            {/* <!--card2--> */}
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card">
          <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
            <a href="/subjects-details" className="btn btn8">التفاصيل</a>
              </div>
        </div>
      </div>
        {/* <!--ends here--> */}
           {/* <!--card3--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
        <div className="card-body">
          <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
          <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
                {/* <!--card4--> */}
        <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <a href="./subjects-details.html"><img src="./images/4-rm.png" className="card-img-top" alt="..." /></a>
        <div className="card-body">
          <h5 className="card-title">شرح الباب الاول "مبدأ العد والتفاضل" </h5>
          <a href="/subjects-details" className="btn btn8">التفاصيل</a>
        </div>
      </div>
      </div>
         {/* <!--ends here--> */}
    
    
      </div>   
    </div>
        {/* <!--subjects container ends here--> */}

    </div>
  </div>
</div>    



 
<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>

</div>
 )
}

export default Subjects;
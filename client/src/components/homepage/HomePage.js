import React from 'react';
import Navbar from '../Navbar';
// import  ScrollReveal from 'scrollreveal';



const HomePage = () =>{
 return(
<div className='homepage'>

<Navbar />

{/* <!--header starts here-->     */}
<header> 
<div className=" cont1">

   <div className="div1 row">
    <div className="col-md-7 col-sm-12">
      <div className="header-left">
        <div className="header-text">
         <h1 className="display-5"> منصة <span className='h1-txt' >معاذ</span> لتعليم رياضيات الصف الثالث</h1>
         <h4 className='sub-header-txt'> الاولي من نوعها في السودان </h4>
         <a className="btn btn1  " href="#aboutus"> ابدأ الان </a>
         <a className="btn btn1-1 " href="./subjects"> تصفح المواد</a>
        </div>
        </div>
    </div>
    <div className="col-md-5 col-sm-12 img-wrapper">
      <div className="header-right ">
        <img className="img1" src="./images/3-rm.png" alt="" />
      </div>  
    </div>

   </div> 

   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
     <path fill="#fff" fill-opacity="1" d="M0,96L40,96C80,96,160,96,240,101.3C320,107,400,117,480,133.3C560,149,640,171,720,154.7C800,139,880,85,960,69.3C1040,53,1120,75,1200,74.7C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>
   
</div>

</header>
{/* <!--header ends here--> */}

{/* <!--about us section--> */}
<div id="aboutus" className="container cont2">
 <div className="row">
  <div className="col-lg-7 col-md-6 col-sm-12">
    <div className="aboutus-left ">
      <div className="about-text">
        <h1 className="text-center display-5"> من <span class="cl-text">نحن؟ </span>  </h1><br />
         <h3>
          <p><span className="bold">شركة جياد لخدمات السيارات المحدودة، </span>شركة رائدة تعمل في مجال خدمات صيانة السيارات وخدمات ما بعد البيع ، وهي امتداد لشركة جياد لصناعة السيارات - فخر الصناعة في السودان - تأسست في عام 2004 ويقع مقرها بمدينة الخرطوم جنوب غرب منطقة سباق الخيل كما أن لها وكلاء بمختلف المدن. </p>
          <p className="extra-info">تمتلك الشركة في مقرها الرئيس ورشاً متطورة لأعمال الصيانة الميكانيكية  وكهرباء السيارات  .</p>
         </h3>
      </div>
      </div>
  </div>
  <div className="col-md-4 col-sm-12">
    <div className="aboutus-right">
    <div className="img2">  
        <img src="./images/about2.webp" alt="" />
    </div>
    </div>
  </div>
 </div>
</div>
{/* <!--about us end here--> */}

{/* <!--categories section--> */}
<div className="container cont3">
  <h2 className="display-5 text-center"><span class="cl-text">اهم</span> ما نقدمه</h2>
  <div className="row">
    <div className="col-md-4 col-sm-12">
      <div className="cat1">
      <div className="circle">
        <span className="cat-img"><img class="img4" src="./images/logo2.png" alt="" /></span>
        <p className="cat-text">حل الامثلة و التمارين </p>
      </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="cat2">
      <div className="circle">
        <span className="cat-img"><img class="img4" src="./images/PicsArt_logo4-mod.png" alt="" /></span>
        <p className="cat-text">شرح منهج الرياضيات العلمي </p>
      </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="cat3">
      <div className="circle">
        <span className="cat-img"><img class="img4" src="./images/PicsArt_logo3.png" alt="" /></span>
        <p className="cat-text">شرح منهج الرياضيات الادبي</p>
      </div>
      </div>
    </div>
  </div>
</div>
{/* <!--categories section ends here--> */}


{/* <!--contact us section--> */}
<div className="container cont4">
  <h2 className="display-5 text-center ">  تواصل <span class="cl-text">معنا</span> </h2>
  <div className="wrapper">
  <div className="contact-section">
  <div className="contact">
    <div className="row">
      <div className="col-md-7 col-sm-12 img3-bg">
        <img className="img3" src='./images/contact-us.jpg' alt="" />
      </div>
      <div className="col-md-5 col-sm-12">
        <div className="contact-info">
          <h4 className="display-6 text-center" >بياناتنا</h4>
          <p><span ><img className='contact-img' src="./images/phone-logo.webp"  alt="logo" /></span><span className='contact-txt' >الهاتف: </span>   0126414252</p>
          <p><span ><img className='contact-img' src="./images/email-logo.webp"  alt="logo" /></span><span className='contact-txt' >الايميل: </span> info@muaz-website.com</p>
          <p><span ><img className='contact-img' src="./images/location-logo.webp"  alt="logo" /></span><span className='contact-txt'>الموقع: </span> السودان الخرطوم امدرمان بالقرب من محطة الشهداء</p>
        </div>
        <form className="form">
          <h5 className="display-6 text-center mb-4" >ارسل رسالة</h5>
          <div className="form-group">
            <input type="text" className="form-control input2" placeholder="ادخل الاسم" />
          </div> <br />
          <div className="form-group">
            <input type="email" className="form-control input2" placeholder="الايميل" />
          </div> <br />
          <div className="form-group">
            <textarea type="text" className="form-control input2" placeholder="الرسالة"></textarea>
          </div>
          <button className="btn2 btn btn-lg" type="submit">ارسل</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>

{/* <!--contact us end here--> */}

{/* <!--footer starts here--> */}
<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>


</div>

 )


}

export default HomePage;
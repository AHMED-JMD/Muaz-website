import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { VideoContext } from '../../context/users/VideoContext';

const AdminDashboard = () => {
 const { video, AddVideo} = useContext(VideoContext);
 const [order, setOrder] = useState([]);
 const [isArrived, setIsArrived] = useState(false);

    const [file, setFile] = useState('');
    const [subject, setSubject] = useState('');
    const [kind, setKind] = useState('');
    const [booknum, setBooknum] = useState('');
    const [chapter, setChapter] = useState('');
    const [subName, setSubName] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');


    //function to get orders
    useEffect(() =>{
        //cal to databse to get orders
        axios.get('/v1/orders/get-request')
         .then(res =>{
             setOrder(res.data);
             setIsArrived(true);
         })
    }, []);

    //function to give access
    const giveAccess = (userId, videoId) =>{
        let data = {userId, videoId}

        axios.post('/v1/orders/give-access')
         .then(res => console.log(res))
         .catch(err => console.log(err))
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('subject' ,subject);
        data.append('kind' ,kind);
        data.append('booknum' ,booknum);
        data.append('chapter' ,chapter);
        data.append('subName' ,subName);
        data.append('price' ,price);
        data.append('details' ,details);
        data.append('file' ,file);

        //post data to server
        axios.post('/v1/vedios/post-video', data)
        .then(res =>{
            AddVideo(res.data);
        }).catch(err => console.log(err))
    }
return ( 
<div className='admin'>   

<Navbar />
<div className="container-fluid header">
 <div className="text-center D-header">
    <h1 className="display-4 pt-3 ">مرحبا مجددا في لوحة التحكم</h1>
    <img src='./images/dashboard-icon.png' className='D-img' alt='logo' />
 </div>
</div> 
<div className='row D-body'>
 <div className='col-lg-4 col-md-4 col-sm-12'>

 <h1 className='text-center'>اضف فيديو جديد</h1>
 
 {(video.isArrived) ? <div className='alert alert-success'>تم اضافة الفيديو بنجاح</div>: null}

<form className='post' onSubmit={handleSubmit}>
    <div className='form-group'>
    <label htmlFor='file' className='label'>الملف</label>
    <input type="file" placeholder='اختر الملف' className='form-control D-input' id='file'
    onChange={(e) => setFile(e.target.files[0])}
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>المادة</label>
     <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={subject}
     onChange={e => setSubject(e.target.value)}
     >
      <option value=" ">اختر</option>
      <option value="رياضيات الصف الثالث" >رياضيات الصف الثالث</option>
     </select>    
    </div>
    <div className='form-group'>
    <label htmlFor='kind' className='label'>النوع</label>
     <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={kind}
     onChange={e => setKind(e.target.value)}
     >
      <option value=" ">اختر </option>
      <option value="علمي">علمي</option>
      <option value="أدبي">أدبي</option>
      <option value="حصص مراجعه">حصص مراجعه</option>

     </select>  
    </div>
    <div className='form-group'>
    <label htmlFor='booknum' className='label'>الكتاب</label>
    <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={booknum}
     onChange={e => setBooknum(e.target.value)}
         >
      <option value=" ">اختر </option>
      <option value="الكتاب الأول"> العلمي الأول</option>
      <option value="الكتاب الثاني">العلمي الثاني</option>
      <option value="كتاب الأدبي"> الأدبي</option>
     </select> 
    </div>
    <div className='form-group'>
    <label htmlFor='chapter' className='label'>اسم الباب</label>
    <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={chapter}
     onChange={e => setChapter(e.target.value)}
         >
      <option value=" ">اختر </option>
      <option value="الاحتمالات">الاحتمالات </option>
      <option value="الاحصاء">الاحصاء </option>
      <option value="الكسور">الكسور </option>
      <option value="المصفوفات">المصفوفات </option>
      <option value="مبدأ العد">مبدأ العد </option>
      <option value="الاعداد المركبة">الاعداد المركبة </option>
      <option value="التفاضل">التفاضل </option>
      <option value="التكامل">التكامل </option>
      <option value="الدائرة">الدائرة </option>
      <option value="الدوال">الدوال </option>
      <option value="تطبيقات التفاضل">تطبيقات التفاضل </option>
      
     </select>
    </div>
    <div className='form-group'>
    <label htmlFor='subName' className='label'>اسم الدرس</label>
    <input type="text" placeholder=' ادخل اسم الدرس' className='form-control D-input'
    value={subName}
    onChange={(e) => setSubName(e.target.value) }
    />
    </div>
    <div className='form-group'>
    <label htmlFor='price' className='label'>السعر</label>
    <input type="number" placeholder='حدد السعر' className='form-control D-input'
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>
    <div className='form-group'>
    <label htmlFor='details' className='label'>التفاصيل</label>
    <textarea type="number" placeholder=' تفاصيل الدرس' className='form-control D-input'
    value={details}
    onChange={(e) => setDetails(e.target.value)}
    > </textarea>
    </div>
    <div className='butn'>
    <button type='submit' className='btn btn8 D-btn'>ارسل</button>
    </div>
</form>

 </div>

 {isArrived?  
 <div className='col-lg-8 col-md-7 col-sm-12 order'>
  <h1 className='display-5 text-center'>طلبات الفيديوهات</h1> 
  <ul className="list-group list-group-flush">
      {
      order.map(order1 =>{
          return(
          <li className="list-group-item l1" key={order1._id}> 
          <p>{order1.username}</p>
          <p><span>اسم الدرس {order1.videoname}</span> <span>السعر {order1.price}جنيه</span></p>
          <button className='btn btn8' onClick={() => giveAccess(order1.userId, order1.videoId)}>اعطي الاذن</button>
          </li>
          )
        })
      }
</ul>  
 </div>: <div className='alert alert-success'>ليس هناك طلبات انتظر قليلا</div>}

  

</div>


<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>
</div>    
);
}
 
export default AdminDashboard;
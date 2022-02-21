import React, { useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

const AdminDashboard = () => {
    const [file, setFile] = useState('');
    const [subject, setSubject] = useState('');
    const [kind, setKind] = useState('');
    const [booknum, setBooknum] = useState('');
    const [chapter, setChapter] = useState('');
    const [subName, setSubName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('subject' ,subject);
        data.append('kind' ,kind);
        data.append('booknum' ,booknum);
        data.append('chapter' ,chapter);
        data.append('subName' ,subName);
        data.append('price' ,price);
        data.append('file' ,file);

        //post data to server
        axios.post('/v1/vedios', data)
        .then(res =>{
            console.log(res);
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
      <option value=" ">لا شئ</option>
      <option value="math-3th">الرياضيات</option>
     </select>    
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>النوع</label>
     <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={kind}
     onChange={e => setKind(e.target.value)}
     >
      <option value=" ">لا شئ</option>
      <option value="science">علمي</option>
      <option value="art">أدبي</option>
     </select>  
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>الكتاب</label>
    <select className="form-select D-input" aria-label="Default select example" dir='ltr'
     value={booknum}
     onChange={e => setBooknum(e.target.value)}
         >
      <option value=" ">لا شئ</option>
      <option value="first-book">الأول</option>
      <option value="second-book">الثاني</option>
     </select> 
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>اسم الباب</label>
    <input type="text" placeholder=' ادخل الباب' className='form-control D-input' 
    value={chapter}
    onChange={(e) => setChapter(e.target.value)}
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>اسم الدرس</label>
    <input type="text" placeholder=' ادخل اسم الدرس' className='form-control D-input'
    value={subName}
    onChange={(e) => setSubName(e.target.value) }
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file' className='label'>السعر</label>
    <input type="number" placeholder='حدد السعر' className='form-control D-input'
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>
    <div className='butn'>
    <button type='submit' className='btn btn8 D-btn'>ارسل</button>
    </div>
</form>

 </div>
 <div className='col-lg-8 col-md-7 col-sm-12 order'>
  <h1 className='display-5 text-center'>طلبات الفيديوهات</h1> 
  <ul class="list-group list-group-flush">
  <li class="list-group-item l1">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item ll">And the last one</li>
</ul>  
 </div>
  

</div>


<footer>
  حقوق الطبع محفوظة لصالح استاذ &copy;معاذ
</footer>
</div>    
);
}
 
export default AdminDashboard;
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
<div className="container-fluid D-header">
 <div className="text-center">
    <h1 className="display-4 pt-3">مرحبا في لوحة التحكم</h1>
 </div>
</div> 
<div className='row Ddashbord'>
 <div className='col-lg-4 col-md-4 col-sm-12'>
<form className='post' onSubmit={handleSubmit}>
    <h1 className='text-center'>اضف فيديو جديد</h1>
    <div className='form-group'>
    <label htmlFor='file'>الملف</label>
    <input type="file" placeholder='اختر الملف' className='form-control' id='file'
    onChange={(e) => setFile(e.target.files[0])}
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file'>المادة</label>
     <select className="form-select" aria-label="Default select example" dir='ltr'
     value={subject}
     onChange={e => setSubject(e.target.value)}
     >
      <option value=" ">لا شئ</option>
      <option value="math-3th">الرياضيات</option>
     </select>    
    </div>
    <div className='form-group'>
    <label htmlFor='file'>النوع</label>
     <select className="form-select" aria-label="Default select example" dir='ltr'
     value={kind}
     onChange={e => setKind(e.target.value)}
     >
      <option value=" ">لا شئ</option>
      <option value="science">علمي</option>
      <option value="art">أدبي</option>
     </select>  
    </div>
    <div className='form-group'>
    <label htmlFor='file' >الكتاب</label>
    <select className="form-select" aria-label="Default select example" dir='ltr'
     value={booknum}
     onChange={e => setBooknum(e.target.value)}
         >
      <option value=" ">لا شئ</option>
      <option value="first-book">الأول</option>
      <option value="second-book">الثاني</option>
     </select> 
    </div>
    <div className='form-group'>
    <label htmlFor='file'>اسم الباب</label>
    <input type="text" placeholder=' ادخل الباب' className='form-control' 
    value={chapter}
    onChange={(e) => setChapter(e.target.value)}
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file'>اسم الدرس</label>
    <input type="text" placeholder=' ادخل اسم الدرس' className='form-control'
    value={subName}
    onChange={(e) => setSubName(e.target.value) }
    />
    </div>
    <div className='form-group'>
    <label htmlFor='file'>السعر</label>
    <input type="text" placeholder='حدد السعر' className='form-control'
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>
    <div className='butn'>
    <button type='submit' className='botn'>ارسل</button>
    </div>
</form>

 </div>
 <div className='col-lg-8 col-md-7 col-sm-12 order'>
  <h1 className='display-5 text-center'>طلبات الفيديوهات</h1> 
  <ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>  
 </div>
  

</div>
</div>    
);
}
 
export default AdminDashboard;
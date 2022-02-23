import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ScienceBook1 = () =>{
const [science1, setScience1] = useState([]);

useEffect(() =>{
    let config = {
        headers: {
            "Content-Type" : "application/json",
            "kind" : "science",
            "booknum" : "first-book"
        }
    }

    //get to data base
    axios.get('/v1/vedios/', config)
     .then(res =>{
         setScience1(res.data)
         console.log(science1)
     }).catch(err => console.log(err))
}, [])

return science1.length ?(
    
    <div className='row'>
    <h3>الكتاب الثاني</h3>
{science1.map(science => {
    return(
 <div className="col-lg-4 col-md-6 col-sm-12 ">
 <div className="card">
   <Link to="/subjects-details">
     <img
       src="./images/4-rm.png"
       className="card-img-top"
       alt="..."
     />
   </Link>
   <div className="card-body">
     <h5 className="card-title">
       شرح الباب الاول "مبدأ العد والتفاضل"{" "}
     </h5>
     <Link to="/subjects-details" className="btn btn8">
       التفاصيل
     </Link>
   </div>
 </div>
</div>
    )
})}


</div>
): <div className='alert alert-success'>لايوجد فيديوهات</div>
}

export default ScienceBook1;
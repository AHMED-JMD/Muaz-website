import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ScienceBook2 = () =>{

    const [science2, setScience2] = useState([]); 

     useEffect(() =>{
        let config = {
            headers :{
                "Content-Type" : "application/json",
                "kind" : "science",
                "booknum" : "second-book"
            }
        }
        
        axios.get('/v1/vedios', config)
         .then(res =>{
             setScience2([res.data])
             console.log(science2)
         })
         .catch(err =>{
             console.log(err);
         })
     }, [])
 return(
     <div className='row'>
        <h3>الكتاب الثاني</h3>

     {/* <!--card1--> */}
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
   {/* <!--ends here--> */}

   </div>
 )
}

export default ScienceBook2;
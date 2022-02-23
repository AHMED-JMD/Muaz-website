import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArtBook = () =>{
    const [art, setArt] = useState([]); 

     useEffect(() =>{
        let config = {
            headers :{
                "Content-Type" : "application/json",
                "kind" : "art",
                "booknum" : "art-book"
            }
        }
        
        axios.get('/v1/vedios', config)
         .then(res =>{
             setArt([res.data])
             console.log(art)
         })
         .catch(err =>{
             console.log(err);
         })
     }, [])
 return(
    <div className="row r1">
    {/* <!--card1--> */}
    <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card">
        <Link to="/subjects-details.html">
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

export default ArtBook;
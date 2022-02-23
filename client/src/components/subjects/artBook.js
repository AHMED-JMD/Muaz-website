import React, { useState} from 'react'
import { Link } from 'react-router-dom';

const ArtBook = () =>{
    const [art, setArt] = useState([])
    // console.log(art)
  
    // useEffect(() =>{
    //   const config = {
    //       headers:{
    //           "Content-Type": "application/json",
    //           "kind" : "art",
    //           "booknum" : "art-book"
    //       }
    //   }
  
    //   //post to database
    // //   axios.get('/v1/vedios', config)
    // //    .then(res =>{
    // //       setArt(res.data.videos);
    // //    }).catch(err => console.log(err))
    // }, []);

    return art.length? (
        <div className="row ">

        {/* <!--card1--> */}
        {art.map(art1 =>{
            return(
                <div className="col-lg-4 col-md-6 col-sm-12 " key={art1._id}>
                <div className="card">
                  <Link to="/subjects-name">
                    <img
                      src="./images/4-rm.png"
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                        {art1.chapter}
                    </h5>
                    <p>{art1.price}</p>
                    <Link to="/subjects-name?subName=less1&kind=ki1" className="btn btn8">
                      التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            )
        })}

        {/* <!--ends here--> */}
      </div>
    ) : <div className='alert alert-success'>ليس هناك فيديوهات الان</div>
}

export default ArtBook;
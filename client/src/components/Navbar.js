import React from 'react';


const Navbar = () => {
    return ( 
            
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">اسم المنصة</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">الرئيسية</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/subjects">تصفح المواد </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/login">تسجيل الدخول </a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="ابحث عن المواد" aria-label="Search" />
          <button className="btn btn0 btn-secondary" type="submit">ادخل</button>
        </form>
      </div>
    </div>
  </nav>

     );
}
 
export default Navbar;
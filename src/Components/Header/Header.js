import React from 'react';
import './Header.css';
import logo2 from '../../images/l2.png'
import {Link} from "react-router-dom";
import useAuth from '../../hooks/useAuth';










const Header = () => {

  const {user,logOut} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ms-5 " >
  <div className="container-fluid">
    <Link class="navbar-brand" to="/home">
      <img src={logo2} alt="" class="headerImg"/>
      
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-5 " id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3 ">
          <Link className="nav-link active linkText" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item me-4 ">
          <Link className="nav-link active linkText " aria-current="page" to="/home">TREATMENTS</Link>
        </li>
       <li className="nav-item me-4">
          <Link className="nav-link active linkText " aria-current="page" to="/services">CONSULTANT</Link>
        </li>
       <li className="nav-item me-4">
          <Link className="nav-link active linkText " aria-current="page" to="/cards">SERVICES</Link>
        </li>
       <li className="nav-item me-4">
          <Link className="nav-link active linkText " aria-current="page" to="/contact">CONTACT</Link>
        </li>

         {user?.email ? 
               <Link to="/home" onClick={logOut}>Logout</Link>:
               <Link  to="/login">Log in</Link>}

       <li className="nav-item me-5 ">
          <Link className="nav-link active linkText1"aria-current="page" to="/home">{user.displayName}</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
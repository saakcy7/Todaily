import React from 'react'
import './Navbar.css'
import { GoChecklist } from "react-icons/go";
import { Link } from 'react-router-dom';
 const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" href="#"><b><GoChecklist/> 
    TODAILY</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active mx-2 " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2 " aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2 " aria-current="page" href="#">Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2 btn-nav" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2 btn-nav" aria-current="page" to="/signin">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2 btn-nav" aria-current="page" href="#">Logout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" href="#"><img
          className='img-fluid user-png' src="https://www.pngitem.com/pimgs/m/80-800555_user-png-transparent-png.png"
          alt='/'></img></Link>
        </li>
        </ul>
     
   
    </div>
  </div>
</nav>
        </div>
)
}
export default Navbar;
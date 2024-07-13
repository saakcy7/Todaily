import React from 'react'
import './Navbar.css'
import { FaBook } from "react-icons/fa6";
 const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><b><FaBook />
    TODAILY</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-2 " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2 " aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2 btn-nav" aria-current="page" href="#">SignUp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2 btn-nav" aria-current="page" href="#">SignIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2 btn-nav" aria-current="page" href="#">Logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2" aria-current="page" href="#"><img
          className='img-fluid user-png' src="https://www.pngitem.com/pimgs/m/80-800555_user-png-transparent-png.png"
          alt='/'></img></a>
        </li>
        </ul>
     
   
    </div>
  </div>
</nav>
        </div>
)
}
export default Navbar;
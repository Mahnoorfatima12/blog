import React from "react";
import { Link } from "react-router-dom";


const Navbar =(props)=> {
  
    return (<nav className="navbar navbar-expand-sm navbar-dark ">
    <div className="container-fluid ms-3 me-3 nav-css">
        <a href="/" className="navbar-brand" to=""> <img className="img-fluid logo-img" src='./images/logo.PNG' alt="/"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse align-items-start justify-content-start text-start " id="mynavbar">
            <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                    <Link className="nav-link" to="/">work<i className="ms-2 nav-icon fa-solid fa-lock"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">services<i className="ms-2 nav-icon fa-solid fa-mug-hot"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">about<i className=" ms-2 nav-icon fa-solid fa-heart"></i></Link>
                </li>
            </ul>
            <div className="d-flex">
            <Link className="nav-link mt-2 me-2" to="/about">blog<i className="ms-2 blog-icon fa-solid fa-message"></i></Link>
            <a href="/" className="nav-btn mt-4 mt-md-0 ">planner<i className="ms-2 fa-solid fa-leaf"></i></a>
            </div>
            
        </div>
    </div>
 </nav>
      );
 };
 
 export default Navbar;
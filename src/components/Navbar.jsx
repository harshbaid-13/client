import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../img/logo.png";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.js";

const Navbar = () => {


  const {currentUser, logout }=useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to ="/" >
          <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='link' to="/?cat=movie"><h6>MOVIES</h6></Link>
          <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/?cat=books"><h6>BOOKS</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
          <span className="write">
            <Link className="link" to ="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
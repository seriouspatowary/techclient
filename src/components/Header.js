import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>


  )
}

export default Header

import React from 'react';
import { NavLink } from "react-router-dom";
import "./styleNav.css";
 function Nav() {
  return (
    <div className='wide'>
      <nav>
    <div className="logo">MUSAFIR<span className='logospan'>BD</span></div>
    <label for="btn" className="icon">
      <span className="fa fa-bars"></span>
    </label>
    <input className='hide' type="checkbox" id="btn" />
    <ul>
      <li><a href="/">Home</a></li>
      <li>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </li>
      {/* <li><a href="/contact">Contact</a></li> */}
      <li><a href="#">Articles</a></li>
      <li>
      <NavLink to="/reg" activeClassName="active">Become a Guide</NavLink>
      </li> 
      {/* <li><a href="/reg">Become a Guide</a></li> */}
      <li>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
      </li>
    </ul>
    </nav>
  </div>
  );
}
export default Nav;
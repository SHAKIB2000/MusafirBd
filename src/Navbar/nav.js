import React from 'react';
import "./styleNav.css";
 function Nav() {
  return (
    <div>
      <nav>
    <div className="logo">MUSAFIR<span className='logospan'>BD</span></div>
    <label for="btn" className="icon">
      <span className="fa fa-bars"></span>
    </label>
    <input className='hide' type="checkbox" id="btn" />
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    </nav>
  </div>
  );
}
export default Nav;
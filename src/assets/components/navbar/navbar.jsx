import React from 'react'
import './index.css';
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='navbar_left'><h1>KALLES</h1></div>
        <div className='navbar_middle'>
          <ul className='navbar_list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/adminpanel">adminpanel</Link></li>

          </ul>
        </div>
        <div className='navbar_right'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-user"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
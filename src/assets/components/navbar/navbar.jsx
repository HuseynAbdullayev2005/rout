import React from 'react'
import './index.css';
function Navbar() {
  return (
    <nav>
    <div className='navbar'>
        <div className='navbar_left'><h1>KALLES</h1></div>
        <div className='navbar_middle'>
            <ul className='navbar_list'>
                <li>Home</li>
                <li>Contact</li>
              
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
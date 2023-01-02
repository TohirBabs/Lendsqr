import React from 'react'
import { Arrowdown } from './Arrowdown'
import { SearchIcon } from './SearchIcon'
import { Logo } from './Logo'
import './navbar.scss'

export const Navbar = ({sideNav, setsideNav}:any) => {
  return (
      <header className='navbar'>
          <div className="menuicon" onClick={() => {
              sideNav === "open" ? setsideNav("close") : setsideNav("open"); console.log(sideNav);
              
              
          }}>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className="logo"><Logo /></div>
          <div className="search">
              <div className="search-box">
                  
              <input type="search" name="" id="" placeholder='Search for anything' />
              <button type="submit"><SearchIcon /></button>
              </div>
          </div>
          <ul className='menu'>
              <li><a href="#">docs</a></li>
              <li className="notification">
                                    <img src={require("./bell.png")} alt="" />

              </li>
              <li className="user-profile">
                  <img src={require("./userdp.png")} alt="" />
              <p>Adedeji</p>
              <Arrowdown/>
</li>
          </ul>
      </header>
  )
}

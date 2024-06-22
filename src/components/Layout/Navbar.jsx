import React, { useState } from 'react'
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";


const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const handleLinkClick = () => setClick(false);
  return (
    <div className='navbar flex justify-between items-center px-20 h-[150px] text-white'>
        <div>
            <img src={logo} alt="main-logo" />
        </div>
        <ul
          className={
            click
              ? "active navbar "
              : "max-[768px]:hidden max-[1290px]:flex gap-6 "
          }
        >
          <li>
            <a  onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a  onClick={handleLinkClick}>
              Careers
            </a>
          </li>
          <li>
            <a  onClick={handleLinkClick}>
              Events
            </a>
          </li>
          <li>
            <a  onClick={handleLinkClick}>
              Products
            </a>
          </li>
          <li>
            <a  onClick={handleLinkClick}>
              Support
            </a>
          </li>
        </ul>
        <div
          className="hidden cursor-pointer max-[768px]:flex relative left-[1.5rem]  "
          onClick={handleClick}
        >
          {click ? (
            <img src={close} alt='close' />
          ) : (
            <img src={hamburger}  alt='hamburger' />
          )}
        </div>
    </div>
  )
}

export default Navbar
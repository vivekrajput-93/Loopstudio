import React from 'react'
import logo from "../../images/logo.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg";


const Footer = () => {
  return (
    <div className='bg-black flex w-full h-full justify-between py-10 px-20 max-[786px]:flex-col max-[786px]:gap-8 '>
     <div className='flex flex-col gap-6  max-[786px]:items-center '>
      <img src={logo} alt="main-logo" width={200} height={200} />

      <ul className='text-white h-full w-full flex gap-3 max-[786px]:flex-col  max-[786px]:items-center '>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
     </div>
     <div className='flex flex-col gap-6  max-[786px]:items-center'>
      <div className='flex gap-3'>
      <img src={facebook} alt="main-logo" />
      <img src={twitter} alt="main-logo" />
      <img src={pinterest} alt="main-logo" />
      <img src={instagram} alt="main-logo" />
        
      </div>
      <span className='text-white'>© 2021 Loopstudios. All rights reserved.</span>
     </div>
    </div>
  )
}

export default Footer
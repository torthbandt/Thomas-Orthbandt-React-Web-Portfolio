import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'


const Header = () => {
  return (
    <header role="banner">
      <div className="container header__container">
        <div>
          <h1>Welcome to my<br/>
          Portfolio Website</h1>
          <h2 className='text-light'> I specialize in</h2>
          <h2 className='text-light'>Website Management &amp; Frontend Development </h2>
          
          <CTA />
          <HeaderSocials />
          
        </div>

        <div className="me">
          <img src={ME} alt="Thomas Orthbandt" width="353" height="353" />
        </div>

        <a href="#contact" className="scroll__down" title="Scroll Down Page"><BsFillArrowDownSquareFill/></a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-transparent.webp'
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, My Name is</h5>
        <h1>Thomas Orthbandt</h1>
        <h5 className='text-light'> I specialize in</h5>
        <h5 className='text-light'>Website Management &amp; Frontend Development </h5>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Thomas Orthbandt" width="353" height="353" />
        </div>

        <a href="#contact" className='scroll__down'><BsFillArrowDownSquareFill/></a>
      </div>
    </header>
  )
}

export default Header
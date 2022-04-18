/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {CgWebsite} from 'react-icons/cg'
import {BiMessageSquareMinus} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" title='Experience' onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" title='Services' onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" title='Portfolio' onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><CgWebsite/></a>
      <a href="#contact" title='Contact Me' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareMinus/></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
/*import {FaTelegramPlane} from 'react-icons/fa'*/
import {SiCodepen} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer role="contentinfo">
      {/* eslint-disable-next-line*/}
      <a href="#" className='footer__logo'>Thomas Orthbandt</a>

      <ul className='permalinks'>
      {/* eslint-disable-next-line*/}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/torthbandt" target='_blank' rel="noreferrer" title="LinkedIn: Thomas Orthbandt"><BsLinkedin /></a>
        <a href="https://codepen.io/torthbandt" target='_blank' rel="noreferrer" title="Codepen: Thomas Orthbandt"><SiCodepen/></a>
        <a href="https://github.com/torthbandt" target='_blank' rel="noreferrer" title="Github: Thomas Orthbandt"><BsGithub/></a>
        {/*<a href="https://t.me/thomas_orthbandt" target='_blank' rel="noreferrer" title="Telegram: Thomas Orthbandt"><FaTelegramPlane/></a>*/}
      </div>

      <div className="footer__copyright">
        <small>&copy; Thomas-Orthbandt.com All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
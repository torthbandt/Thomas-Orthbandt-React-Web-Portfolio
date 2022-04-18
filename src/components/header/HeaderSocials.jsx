import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiCodepen} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://linkedin.com/in/torthbandt" target="_blank" rel="noreferrer"><BsLinkedin /></a>
         <a href="https://codepen.io/torthbandt" target="_blank" rel="noreferrer"><SiCodepen /></a>
         <a href="https://github.com/torthbandt" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
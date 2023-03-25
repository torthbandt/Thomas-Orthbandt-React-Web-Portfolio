import React from 'react'
import Resume from '../../assets/Thomas-Orthbandt-resume.pdf';

const CTA = () => {
  return (
    <div class="cta">
         <a href={Resume} className='btn btn-download'>Download Resume</a>
         <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA
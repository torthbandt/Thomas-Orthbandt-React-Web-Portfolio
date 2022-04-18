import React from 'react'
import './about.css'
import ME from '../../assets/thomas-orthbandt-headshot.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="Thomas Orthbandt" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>20+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>Clients Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>100+ Completed Projects</small>
						</article>
					</div>

					<p>
					Self-motivated technology professional with deep knowledge and proficiency in HTML, CSS, JavaScript, and mobile responsive web development. Enjoy working collaboratively with Design, Marketing, Engineering, and Product teams to produce effective web campaigns.</p>
					<p><strong>Specialties:</strong> Latest web technologies, strategic and creative demand generation experience, lead maturation, analytical and front-end web development coding.
					</p>

					<a href="#contact" className='btn btn-primary'>Let's Chat</a>

				</div>
			</div>
		
		</section>
	)
}

export default About
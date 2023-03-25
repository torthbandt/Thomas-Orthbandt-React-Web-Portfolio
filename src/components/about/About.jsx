import React from 'react'
import './about.css'
import ME 				  	from '../../assets/thomas-orthbandt-headshot.webp'
import {FaAward} 			from 'react-icons/fa'
import {FiUsers} 			from 'react-icons/fi'
import {VscFolderLibrary} 	from 'react-icons/vsc'

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="Thomas Orthbandt" width="374" height="374" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>20+ Years </small>
						</article>
						<article className="about__card">
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>100+ Completed</small>
						</article>
					</div>

					<p>
					I'm a highly skilled and experienced <strong>Website Manager</strong> and <strong>Front-end Developer</strong> with over 20+ years of experience. I'm proficient in HTML5, CSS3, JS (vanilla & React), and other relevant programming languages such as PHP.</p>
					
					<p> I'm adept at utilizing content management systems (CMS) to manage and maintain websites, building Wordpress Themes, implementing SEO and website optimization strategies, as well as executing digital marketing plans to drive website page views and conversions.</p>

					<p>I have a lot of experience with Google Analytics (GA UA & GA4), Google Tag Manager implementing dataLayers and Custom Dimensions, Google Optimize for Conversion Rate Optimization AB testing and Personalization.  I enjoy using real data to better serve the end-users.</p>

					<p>I can help any company get the best out of their website and grow their user base and conversions.  If interested ...</p>

					{/*
					<p>
					Self-motivated technology professional with deep knowledge and proficiency in HTML, CSS, JavaScript, and mobile responsive web development. Enjoy working collaboratively with Design, Marketing, Engineering, and Product teams to produce effective web campaigns.</p>
					<p><strong>Specialties:</strong> Latest web technologies, strategic and creative demand generation experience, lead maturation, analytical and front-end web development coding.
					</p>
					*/}

					<a href="#contact" className='btn btn-primary'>Let's Chat</a>

				</div>
			</div>
		
		</section>
	)
}

export default About
import React from 'react'
import './about.css'
//import ME 				  	from '../../assets/thomas-orthbandt-headshot.webp'
import {FaAward} 			from 'react-icons/fa'
import {FiUsers} 			from 'react-icons/fi'
import {VscFolderLibrary} 	from 'react-icons/vsc'

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>

			<div className="container about__container">
				{/*<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="Thomas Orthbandt" width="374" height="374" />
					</div>
				</div>-*/}
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
					I'm a highly skilled and experienced <strong>Website Manager</strong> and <strong>Front-end Developer</strong> with over 20+ years of experience. I'm proficient in HTML5, CSS3/SCSS, JS (vanilla & React), and other relevant programming languages such as PHP.</p>
					
					<p> I'm adept at utilizing <strong>content management systems (CMS)</strong> to manage and maintain websites, building Wordpress themes, implementing SEO and website optimization strategies, as well as executing digital marketing plans to drive website enablement and conversions.</p>

					<p>I have over 12 years of experience working with <strong>Google Analytics</strong>, allowing me to effectively analyze data and provide valuable insights for my clients. In addition, I have over 8 years of experience with <strong>Google Tag Manager</strong>, which I successfully implement tracking tags and manage complex data layers for various websites. Finally, I have over 5 years of experience with <strong>Google Optimize</strong>, allowing me to conduct effective A/B testing and optimization experiments that have resulted in improved website performance and increased conversion rates.</p>

					<p>Lastly, I have a deep understanding of the latest <strong>SEO</strong> trends and best practices. My expertise covers a broad range of SEO techniques, including on-page optimization, technical SEO, link building, and local SEO. I have also worked with a diverse range of clients across various industries, including e-commerce, finance, tech, and security. This has allowed me to consistently deliver impactful results for my clients and help them achieve their business objectives.</p>

					<a href="#contact" className='btn btn-primary'>Let's Chat</a>

				</div>
			</div>
		
		</section>
	)
}

export default About
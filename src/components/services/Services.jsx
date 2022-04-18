import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>SASS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS3</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sketch</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Illustrator</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML5</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>jQuery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>REST API</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>AJAX</p>
            </li>
          </ul>
        </article>
        {/* END Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Collaboration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stack Overflow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Github</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JIRA</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asana</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Slack</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Teams</p>
            </li>
          </ul>
        </article>
        {/* END Content Creation */}
      </div>
    </section>
  )
}

export default Services
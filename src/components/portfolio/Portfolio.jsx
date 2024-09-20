import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pipefy-home.webp'
import IMG2 from '../../assets/pipefy-homepage.gif'
import IMG3 from '../../assets/wcu-home.webp'
import IMG4 from '../../assets/nav-arrow-border.webp'
import IMG5 from '../../assets/clorox-home.webp'
import IMG6 from '../../assets/clorox-email.webp'
import IMG7 from '../../assets/codepen-carousel-glad.webp'
import IMG8 from '../../assets/hirevue-home.webp'
import IMG9 from '../../assets/akamai-home.webp'
import IMG10 from '../../assets/crypto-calculator.webp'
import IMG11 from '../../assets/apple-website.webp'
import IMG12 from '../../assets/movie-list.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pipefy Home',
    url: 'https://pipefy.com',
    site: 'pipefy.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Pipefy Fixed CTA',
    url: 'https://codepen.io/torthbandt/pen/yLdjwQd',
    site: 'Codepen.io',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WCU Home',
    url: 'https://westcoastuniversity.edu',
    site: 'westcoastuniversity.edu',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Nav arrows highlighted',
    url: 'https://codepen.io/torthbandt/pen/PoBZvwp',
    site: 'Codepen.io',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Clorox Home',
    url: 'https://clorox.com',
    site: 'clorox.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Email - Clorox',
    url: 'https://codepen.io/torthbandt/pen/GRXvRmZ',
    site: 'Codepen.io',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Carousel',
    url: 'https://codepen.io/torthbandt/pen/dyVMyVx',
    site: 'Codepen.io',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Hirevue Home',
    url: 'https://hirevue.com',
    site: 'hirevue.com',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Akamai Home',
    url: 'https://akamai.com',
    site: 'akamai.com',
  },
  {
    id: 10,
    image: IMG10,
    title: 'Crypto Calculator',
    url: 'https://codepen.io/torthbandt/pen/poqvymG',
    site: 'Codepen.io',
  },
  {
    id: 11,
    image: IMG11,
    title: '3D iPhone',
    url: 'https://projects.thomas-orthbandt.com',
    site: 'Website',
  },
  {
    id: 12,
    image: IMG12,
    title: 'Movie List',
    url: 'https://codepen.io/torthbandt/pen/XWEmxzr',
    site: 'Codepen.io',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, url, site}) => {
          return (
            <a href={url} target='_blank'rel="noreferrer">
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} width="289" height="220"/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <p>{site}</p>
                </div>
              </article>
            </a>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio
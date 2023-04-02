import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/apple-website.webp'
import IMG2 from '../../assets/movie-list.webp'
import IMG3 from '../../assets/magnify-js.webp'
import IMG4 from '../../assets/codepen-carousel-glad.webp'
import IMG5 from '../../assets/model.webp'
import IMG6 from '../../assets/personal-timeline.webp'
import IMG7 from '../../assets/rest-api-wiki.webp'
import IMG8 from '../../assets/american-flag.webp'
import IMG9 from '../../assets/clorox-email.webp'
import IMG10 from '../../assets/nav-arrow-border.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: '3D iPhone',
    url: 'https://projects.thomas-orthbandt.com',
    site: 'Website',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie List',
    url: 'https://codepen.io/torthbandt/pen/XWEmxzr',
    site: 'Codepen.io',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Magnify JS',
    url: 'https://codepen.io/torthbandt/pen/yLKMrZZ',
    site: 'Codepen.io',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Carousel',
    url: 'https://codepen.io/torthbandt/pen/dyVMyVx',
    site: 'Codepen.io',
  },
  {
    id: 5,
    image: IMG5,
    title: 'CSS Modal with Overlay',
    url: 'https://codepen.io/torthbandt/pen/abOBQmx',
    site: 'Codepen.io',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Timeline',
    url: 'https://codepen.io/torthbandt/pen/xPqJaL',
    site: 'Codepen.io',
  },
  {
    id: 7,
    image: IMG7,
    title: 'REST Wiki',
    url: 'https://codepen.io/torthbandt/pen/ZaYQzK',
    site: 'Codepen.io',
  },
  {
    id: 8,
    image: IMG8,
    title: 'CSS3 - American Flag',
    url: 'https://codepen.io/torthbandt/pen/zqNpxQ',
    site: 'Codepen.io',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Email - Clorox',
    url: 'https://codepen.io/torthbandt/pen/GRXvRmZ',
    site: 'Codepen.io',
  },
  {
    id: 10,
    image: IMG10,
    title: 'Nav arrows highlighted',
    url: 'https://codepen.io/torthbandt/pen/PoBZvwp',
    site: 'Codepen.io',
  }
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
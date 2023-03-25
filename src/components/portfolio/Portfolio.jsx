import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/movie-list.webp'
import IMG2 from '../../assets/magnify-js.webp'
import IMG3 from '../../assets/codepen-carousel-glad.webp'
import IMG4 from '../../assets/model.webp'
import IMG5 from '../../assets/personal-timeline.webp'
import IMG6 from '../../assets/rest-api-wiki.webp'
import IMG7 from '../../assets/american-flag.webp'
import IMG8 from '../../assets/clorox-email.webp'
import IMG9 from '../../assets/nav-arrow-border.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie List',
    codepen: 'https://codepen.io/torthbandt/pen/XWEmxzr',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Magnify JS',
    codepen: 'https://codepen.io/torthbandt/pen/yLKMrZZ'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Carousel',
    codepen: 'https://codepen.io/torthbandt/pen/dyVMyVx'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CSS Modal with Overlay',
    codepen: 'https://codepen.io/torthbandt/pen/abOBQmx'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Timeline',
    codepen: 'https://codepen.io/torthbandt/pen/xPqJaL'
  },
  {
    id: 6,
    image: IMG6,
    title: 'REST Wiki',
    codepen: 'https://codepen.io/torthbandt/pen/ZaYQzK'
  },
  {
    id: 7,
    image: IMG7,
    title: 'CSS3 - American Flag',
    codepen: 'https://codepen.io/torthbandt/pen/zqNpxQ'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Email - Clorox',
    codepen: 'https://codepen.io/torthbandt/pen/GRXvRmZ'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Nav arrows highlighted',
    codepen: 'https://codepen.io/torthbandt/pen/PoBZvwp'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, codepen}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} width="289" height="220"/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={codepen} className='btn' target='_blank'rel="noreferrer">CodePen</a>
              </div>
            </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio
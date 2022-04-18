import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/codepen-carousel-glad.jpg'
import IMG2 from '../../assets/model.png'
import IMG3 from '../../assets/org-chart.png'
import IMG4 from '../../assets/personal-timeline.png'
import IMG5 from '../../assets/rest-api-wiki.png'
import IMG6 from '../../assets/american-flag.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Carousel',
    codepen: 'https://codepen.io/torthbandt/pen/dyVMyVx'
  },
  {
    id: 2,
    image: IMG2,
    title: 'CSS Modal with Overlay',
    codepen: 'https://codepen.io/torthbandt/pen/abOBQmx'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Responsive Org Chart',
    codepen: 'https://codepen.io/torthbandt/pen/vPVWVV'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Timeline',
    codepen: 'https://codepen.io/torthbandt/pen/xPqJaL'
  },
  {
    id: 5,
    image: IMG5,
    title: 'REST Wiki',
    codepen: 'https://codepen.io/torthbandt/pen/ZaYQzK'
  },
  {
    id: 6,
    image: IMG6,
    title: 'CSS3 - American Flag',
    codepen: 'https://codepen.io/torthbandt/pen/zqNpxQ'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, codepen, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={codepen} className='btn' target='_blank'rel="noreferrer">CodePen</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>*/}
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
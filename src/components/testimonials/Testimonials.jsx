import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/mike.webp'
import AVTR2 from '../../assets/daniel.webp'
import AVTR3 from '../../assets/mike-t.webp'
import AVTR4 from '../../assets/sandy.webp'
import AVTR5 from '../../assets/jessica.webp'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Mike Serpe',
    review: "Thomas feverishly supported our team in the capacity of Global Marketing Manager. Our team was highly successful in marketing and business development of all services offerings under the Oracle University umbrella. This included but is not limited to generating $200-600M per annum in revenues from educational services, courseware licensure, certification programs/exams."
  },
  {
    avatar: AVTR2,
    name: 'Daniel Chin',
    review: "If you think of passion, honesty, and relability, you get Thomas. Thomas has done a great job for me in his web development and design. Now if only there were more Thomas's out there."
  },
  {
    avatar: AVTR3,
    name: 'Mike Teves',
    review: "Thomas is a fantastic Front End Developer with a can do attitude that makes him very much sought after in today's market."
  },
  {
    avatar: AVTR4,
    name: 'Sandy Chu',
    review: "Thomas has helped me set up many marketing campaigns throughout his tenure at Intuit. I've always found him very pleasant and helpful even with tight turnaround times. I appreciate his service-oriented mentality and strong business partnership."
  },
  {
    avatar: AVTR5,
    name: 'Jessica Jensen',
    review: "Thomas and I originally worked together at Oracle, only virtually, where he was a key stakeholder who I was always impressed with - he came to the table totally prepared, and what he didn't know, he was willing to learn (and learn quickly at that!). I had the pleasure of working with Thomas on the same team at Intuit, where I learned he's got a true eye for detail, is extremely personable, and can be relied on to always do what he says he's going to do. Always calm under pressure, he's willing to do what it takes to achieve results and surpasses expectations every time!"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} width="132" height="132" />
              </div>
              <h2 className="client__name">{name}</h2>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/mark-p.webp'
import AVTR2 from '../../assets/jess-s.webp'
import AVTR3 from '../../assets/mike-s.webp'
import AVTR4 from '../../assets/dan-c.webp'
import AVTR5 from '../../assets/mike-t.webp'
import AVTR6 from '../../assets/sandy-c.webp'
import AVTR7 from '../../assets/jessica-j.webp'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Mark Pinard',
    title: 'Chief Marketing Officer (CMO)',
    review: [
      "I had the pleasure of working closely with Thomas while he served as our Website Marketing Manager at Pipefy, and I can confidently say he's one of the most dependable and skilled professionals I've encountered.",
      "Thomas consistently demonstrated an exceptional ability to collaborate with stakeholders across different departments, ensuring that everyone was aligned with our website initiatives. His communication skills and proactive approach made it easy for everyone involved to stay informed and engaged, no matter how complex the project.\n",
      "What truly sets Thomas apart is his ability to deliver high-quality work under tight deadlines. Whether it was launching a new product page or managing an entire site redesign, he approached every challenge with a calm, solution-oriented mindset. His dedication and attention to detail ensured that we always met our goals, even when the timeline was less than ideal.\n",
      "Thomas would be an incredible asset to any team, and I can't recommend him highly enough for his professionalism, creativity, and commitment to excellence."
    ]
  },
  {
    avatar: AVTR2,
    name: 'Jess Summers',
    title: 'Director, Web Strategy',
    review: [
      "I've had the pleasure of working closely with Tom at Collegis Education where he contributed as a UX and CRO expert and front end developer for our clients who are educational institutions.",
      "Tom stands out in his skill set and ability to explain complex technical concepts clearly.", 
      "He is a pleasure to work with, he is positive, adaptable, and a great collaborator.", 
      "I highly recommend Tom for anyone needing a skilled web manager and developer who also understands user experience and brings a positive and productive attitude to the team."
    ]
    },
  {
    avatar: AVTR3,
    name: 'Mike Serpe',
    title: 'Director of Marketing and Sponsorship',
    review: "Thomas feverishly supported our team in the capacity of Global Marketing Manager. Our team was highly successful in marketing and business development of all services offerings under the Oracle University umbrella. This included but is not limited to generating $200-600M per annum in revenues from educational services, courseware licensure, certification programs/exams."
  },
  {
    avatar: AVTR4,
    name: 'Daniel Chin',
    title: 'Principal, Technical Recruiting',
    review: "If you think of passion, honesty, and relability, you get Thomas. Thomas has done a great job for me in his web development and design. Now if only there were more Thomas's out there."
  },
  {
    avatar: AVTR5,
    name: 'Mike Teves',
    title: 'Manager of Talent Acquisition',
    review: "Thomas is a fantastic Front End Developer with a can do attitude that makes him very much sought after in today's market."
  },
  {
    avatar: AVTR6,
    name: 'Sandy Chu',
    title: 'Product Marketing and Program Management',
    review: "Thomas has helped me set up many marketing campaigns throughout his tenure at Intuit. I've always found him very pleasant and helpful even with tight turnaround times. I appreciate his service-oriented mentality and strong business partnership."
  },
  {
    avatar: AVTR7,
    name: 'Jessica Jensen',
    title: 'Senior Product Manager, Digital Client Experiences',
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
        data.map(({avatar, name, title, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} width="132" height="132" />
              </div>
              <h2>{name}</h2>
              <h3>{title}</h3>
              <small className='client__review'>
                {Array.isArray(review)
                  ? review.map((quote, idx) => (
                    <React.Fragment key={idx}>
                      {quote}
                      <br />
                      <br />
                    </React.Fragment>
                  ))
                : review}
              </small>
            </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials
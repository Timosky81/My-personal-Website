import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import AVTR1 from '../assets/images/go.jpg'
import AVTR2 from '../assets/images/gk.jpg'
import AVTR3 from '../assets/images/avatar2.jpg'
import AVTR4 from '../assets/images/avatar8.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: AVTR1,
    name: 'Mr. Gbenga Olaleye',
    review: 'I have had the previledge of knowing Thomas Ebimobowei Akiou for over seven years. He is a dedicated professional with several years of experience under his belt. He is a hardworking and dedicated young man and i can vauch for his competence at any time.',
  },

  {
    image: AVTR2,
    name: 'Mr. Garba K. Mohammed',
    review: 'When Dynamic Peoples Association (DPA) needed an application to solve our associations problem of giving our members the opportunity to view their monthly savings, Thomas came to our aid by developing a web application that met our needs and he finished within the stipulated time.',
  },

  {
    image: AVTR3,
    name: 'Ms. Ebi Owoubiri',
    review: 'Thomas is a dedicated and intelligent hardworking young man with a keen eye for detail. I have worked with him as a boss and I am very pleased with his attitude towards his duties. Thomas will always find a solution to every challenge we faced in the office',
  },

  {
    image: AVTR4,
    name: 'Samuel Ebimo',
    review: 'As a friend and a colleague, Thomas has never disappointed me in everything we do. He is a good time keeper and a perfectionist who believes anything worth doing is worth doing well. He will be a good asset to any employee',
  },
]

const Testimonies = () => {
  return (
    <Box id= 'testimonial' padding= '20px'>
          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '70px', xs: '100px'}, width: {xs: '100%'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                What Clients are saying about me
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                My Testimonials
              </Typography>
          </Stack>


          
      <Swiper className="container testimonial__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >

             {
              data.map(({image, name, review}, index) => {
                return (
                  <SwiperSlide key={index} className='testimonial' >
                      <Stack  className="client__avatar">
                        <img src={image} alt="Avatar" width= '100%'/>
                      </Stack>
                      <Typography fontSize={15} fontWeight='600' color= '#fff' mb= '10px'>{name}</Typography>
                      <Typography fontSize={14} color= '#a0a0aa' textAlign= 'center'>{review}</Typography> 
                  </SwiperSlide>
                )})}                         
          </Swiper>       
    </Box>
         
  )}

export default Testimonies
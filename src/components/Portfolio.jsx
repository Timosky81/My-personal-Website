import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import IMG1 from '../assets/images/tom.png'
import IMG2 from '../assets/images/dpa.png'
import IMG3 from '../assets/images/timosky.png'
import IMG4 from '../assets/images/coming2.jpg'
import IMG5 from '../assets/images/coming2.jpg'
import IMG6 from '../assets/images/coming2.jpg'



// Array method 

const data = [
  
  {
    id: 1,
    image: IMG1,
    title: 'My Personal Website',
    github: 'https://github.com/Timosky81/My-personal-Website.git',
    demo: 'https://dribble.com/Alien_pixels'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Dynamic Peoples Association',
    github: 'https://github.com/Timosky81/Dynamic-WebApp.git',
    demo: 'https://dynamicpeople.000webhostapp.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Timosky personal blog',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 4,
    image: IMG4,
    title: 'This project is coming soon',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 5,
    image: IMG5,
    title: 'This project is coming soon',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 6,
    image: IMG6,
    title: 'This project is coming soon',
    github: 'https://github.com',
    demo: '#'
  },
]


const Portfolio = () => {
  return (
    <Box id= 'portfolio' padding= '50px'>
          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '70px', xs: '100px'}, width: {xs: '100%'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                My Recent Works
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                My Portfolio
              </Typography>
          </Stack>



          <Box>
            <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} >
                
                    {
                        data.map(({id, image, title, github, demo}) => {
                          return (
                            <Grid item xs={4} sm={4} md={4} key={id}>
                              <item>
                                <Stack key={id} className='portfolio__item'>
                                      <Stack className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                      </Stack>
                                      <Typography variant= 'h6' fontWeight="bold" color= '#fff' margin= '20px 0'>{title}</Typography>
                                      <Stack direction= 'row' 
                                            gap= '1rem'
                                            marginBottom= '1rem'>
                                          <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                          <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                                      </Stack>                 
                                </Stack>
                              </item>
                            </Grid>
                          )
                      })
                    }                             
              </Grid> 
          </Box>
    </Box>
  )
}

export default Portfolio
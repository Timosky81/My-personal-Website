import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from '../assets/images/me.png'
import CTA from './cta'
// import Logo from './nav/Logo'

import NAV from './nav/Nav'

const Home = () => {
  return (

  <Box id= 'home' sx={{ mt:{lg: '212px', xs: '70px'}, 
             width: {xs: '100%'} }} position='relative' p='20px'>

        {/* <Stack sx= {{display: { lg: 'none', xs: 'flex'}, marginTop: { lg: '-50px', xs: '-20px'}}}>
          <Logo/>
        </Stack> */}

        <Stack sx= {{ pl: {lg: '150px', sm: '100px'}}}>
              <Typography color='#4db5ff'
                fontWeight='400' fontSize='16px'>
                Hello, I'am
              </Typography>    
              
              <Typography color='#4db5ff'
                fontWeight='600' fontSize='60px'>
                Thomas 
              </Typography>

              <Typography fontSize='22px' color='#a0a0aa'
              lineHeight='35px' mb={4}>
                a front-end developer with <br/>
                over 2+ years experience
              </Typography>

              <CTA />
        </Stack>


        <Typography fontWeight={600}
          color="#4db5ff" 
          sx={{
            opacity: 0.1, 
            display: { lg: 'block', sm: 'none', xs: 'none'}
            }} fontSize={200}>
          Thomas Akiou
        </Typography> 

       <img src={Image} alt="Pix-of-me" className='my-image' />

       <Stack sx={{display: { lg: 'none', xs: 'block'}}}>
         <NAV />
      </Stack> 
  </Box>


  )
}

export default Home
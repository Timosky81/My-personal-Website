import React from 'react'
import { Box, Stack, Typography, Link } from '@mui/material'
import { Scroll }from '../components'


const Footer = () => {
  return (
    <Box sx= {{ mb: { lg: '10px', sm: '80px', xs: '90px'}}}>
      <Stack sx= {{ flexDirection: { lg: 'row', sm: 'row', xs: 'row'}, gap: { lg: '30px', sm: '20px', xs: '10px'} }} 
                    justifyContent= 'center' 
                    // m= '80px 0 5px'
                    p= '50px 0 0'
                    >
            {/* <Link href='#home' underline="none" className= 'links'>{'Home'}</Link> */}
            <Link href='#about' underline="none" className= 'links'>{'About'}</Link>
            <Link href='#experience' underline="none" className= 'links'>{'Experience'}</Link>
            <Link href='#skills' underline="none" className= 'links'>{'Services'}</Link>
            <Link href='#portfolio' underline="none" className= 'links'>{'Portfolio'}</Link>
            <Link href='#testimonial' underline="none" className= 'links'>{'Testimonials'}</Link>
      </Stack>

      <Stack>
         <Scroll />
      </Stack>

      <Stack direction= 'row' p= '20px 20px 0 20px' color= '#fff' justifyContent= 'center' >
        <Typography variant= 'h8'>&copy; Thomas Akiou. All Rights reserved</Typography>
    </Stack>
  </Box>
  )
}

export default Footer
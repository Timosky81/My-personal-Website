import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Box, Stack } from '@mui/material'

import { Navbar, Home, About, Experience, Skills, Portfolio, Testimonies, Contact, Footer }from './components'


import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Stack sx={{ display: { lg: 'block', xs: 'none'} }}>
           <Navbar />
        </Stack>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Testimonies />
        <Contact />
        <Footer />
      </Box>
    </BrowserRouter>

  )
}

export default App
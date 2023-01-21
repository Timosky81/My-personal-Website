import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'


import Logo from '../../assets/images/logo1.png'

const Navbar = () => {
  return (
    <Stack 
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '100px', xs: '20px'}, 
      mt: { sm: '32px', xs: '20px'},  
      justifyContent: 'none'}} px='20px'      
    >
      <Link>
        <img src={Logo} alt='Logo' style={{
        width: '48px', height: '48px', margin: '0 15px' }}/> 
      </Link>

      <Stack 
       direction='row' 
       alignItems='flex-end' 
       sx={{ gap:{ lg: '20px', xs: '10px'},
             fontSize: { lg: '24px', xs: '20px'}, 
              }}>
       
        <a href='#home' style={{
          textDecoration: 'none', 
          color: '#a0a0aa', 
          borderBottom: '3px solid #4db5ff'}}>Home
        </a>       
        <a href='#about' style={{
          textDecoration: 'none', 
          color: '#a0a0aa'}}>About
        </a>        
        <a href='#experience' style={{
          textDecoration: 'none', 
          color: '#a0a0aa'}}>Experience
        </a>        
        <a href='#skills' style={{
          textDecoration: 'none', 
          color: '#a0a0aa'}}>Skills
        </a>        
        <a href='#portfolio' style={{
          textDecoration: 'none', 
          color: '#a0a0aa'}}>Portfolio
        </a>        
        <a href='#contact' style={{
          textDecoration: 'none', 
          color: '#a0a0aa'}}>Contact
        </a>
        
      </Stack>



    </Stack>
  )
}

export default Navbar
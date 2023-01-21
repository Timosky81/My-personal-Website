import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
// import Grid from '@mui/material/Unstable_Grid2';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';




// Array method 

const data = [
  
  {
    icon: <MailOutlineIcon />,
    title: 'Email',
    info: 'thomas.akiou@gmail.com',
    link: 'mailto:thomas.akiou@gmail.com'
  },

  {
    icon: <LinkedInIcon />,
    title: 'LinkedIn',
    info: 'thomas-akiou',
    link: 'https://www.linkedin.com/in/thomas-akiou-45a51763/'
  },

  {
    icon: <GitHubIcon />,
    title: 'GitHub',
    info: 'thomas-akiou',
    link: 'https://github.com/Timosky81'
  },

  {
    icon: <WhatsAppIcon />,
    title: 'Whatsapp',
    info: '+234-7069244957',
    link: 'https://api.whatsapp.com/send?phone=07069244957'
  }, 

  {
    icon: <CallIcon/>,
    title: 'Call',
    info: '+234-7069244957',
    link: 'tel:07069244957'
  }, 
]


const Contact = () => {
  return (
    <Box id= 'contact' padding= '40px'>
          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '70px', xs: '100px'}, width: {xs: '100%'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                Get in touch
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                Contact Me
              </Typography>
          </Stack>


          <Stack direction= {{ lg: 'row', sm: 'column', xs: 'column' }} gap= {{ lg: '30px', sm: '20px', xs: '10px'}} margin= {{ lg: '0 0 0 40px', sm: '0 200px', xs: '0 50px'}}>
             {
              data.map(({icon, title, info, link}, index) => {
                return (
                  <Stack className='contact' key={index} p= '30px' textAlign= 'center' borderRadius= '32px' bgcolor= 'var(--color-bg-variant)' >
                          <Stack  sx= {{ color: '#fff', fontSize: '35px', mb: '20px'}}>
                            {icon} 
                          </Stack>
                      <Typography marginBottom= '5px' color= '#fff' fontWeight= 'bold' fontSize= '13px'>{info}</Typography>
                      <Typography marginBottom= '5px' color= '#a0a0aa' fontWeight= 'bold'>{title}</Typography>
                      <a href={link} target="_blank" rel='noreferrer'>Click to send message</a> 
                  </Stack>
                )})}                         
          </Stack>
    </Box>
  )
}

export default Contact
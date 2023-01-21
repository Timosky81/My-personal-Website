import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ME from '../assets/images/me-about.png' 

const About = () => {
  return (
    <Box id='about' padding= '10px'>

          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '40px', xs: '100px'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                Get to know
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                About Me
              </Typography>
          </Stack>  


          <Stack sx= {{ gap: { lg: '150px', sm: '30px', xs: '10px' },
                        flexDirection: {lg: 'row', sm: 'row', xs: 'column'},
                        width: {xs: '100%'},
                         }} justifyContent= 'center'
                  >
                  <Stack className='about'  sx= {{ width: {lg: '100%', sm: '40%', xs: '60%'}, 
                                                   height: { lg: '500px', sm: '500px', xs: '400px'}, 
                                                   ml: {lg: '5%', sm:'3%', xs:'20%'}}} >
                      <img src={ME} alt="About-me" className='about-me-image' />
                  </Stack>

                  
                 {/******************************* ABOUT-CARDS *********************************************/}
                  <Stack direction='column' sx= {{marginTop: {lg: '105px'} }}>
                          <Stack
                                gap= '20px'
                                // marginBottom= '10px'
                                sx= {{ margin: {lg: '-100px 0 7px', xs: '10px 0 7px'}, 
                                       flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
                                       padding: {lg: '0 20px', xs: '0 20px'} }}
                              >

                                {/******************************* CARD-ONE *********************************************/}
                                  <Stack className='cards' 
                                         padding= '20px 43px'
                                         alignItems= 'center'            
                                        >
                                          <EmojiEventsOutlinedIcon sx= {{ fontSize: '35px', 
                                                                  color: 'var(--color-primary)', 
                                                                  mb: '17px',
                                                                  }} /> 
                                          <Typography style={{ color: '#fff', fontWeight: '700'}} >
                                            Experience
                                          </Typography>              
                                          <Typography style={{ color: '#a0a0aa', fontSize: '12px'}}>
                                            5+ Years Working
                                          </Typography>              
                                    
                                  </Stack>            
                                  
                                 {/******************************* CARD-TWO *********************************************/}  
                                  <Stack className='cards' 
                                        padding= '20px 50px'
                                        alignItems= 'center'            
                                        >
                                          <PeopleAltOutlinedIcon sx= {{ fontSize: '35px', 
                                                                  color: 'var(--color-primary)', 
                                                                  mb: '17px',
                                                                  }} /> 
                                          <Typography style={{ color: '#fff', fontWeight: '700'}} >
                                            Clients
                                          </Typography>              
                                          <Typography style={{ color: '#a0a0aa', fontSize: '12px'}}>
                                            20+ Worldwide
                                          </Typography>              
                                  
                                  </Stack>            

                                 {/******************************* CARD-THREE *********************************************/}  
                                  <Stack className='cards'
                                        padding= '20px 50px'
                                        alignItems= 'center'           
                                        >
                                          <WorkOutlineOutlinedIcon sx= {{ fontSize: '35px', 
                                                                  color: 'var(--color-primary)', 
                                                                  mb: '17px',
                                                                  }} /> 
                                          <Typography style={{ color: '#fff', fontWeight: '700'}} >
                                            Projects
                                          </Typography>              
                                          <Typography style={{ color: '#a0a0aa', fontSize: '12px'}}>
                                            6+ Completed
                                          </Typography>                       
                                  </Stack> 
                    
                              </Stack>
                              
                              <Stack sx= {{ padding: { lg: '20px 130px 20px 20px', sm: '20px', xs: '20px'}}}>
                                  <Typography style={{ color: '#a0a0aa', fontSize: '18px', marginTop: '50px'}}>
                                      Performance driven and knowledgeable with over seven years experience in Computer Engineering 
                                      and Information Science and an MSc in Computer and Information Technology, 
                                      Flexible to work remotely or on-site anywhere in the world.                                          
                                  </Typography> 
                                                      
                                  <div className='cta'>
                                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                                  </div>
                             </Stack>
                  </Stack>
          </Stack>
    </Box>
  )
}

export default About
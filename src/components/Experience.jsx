import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';


const Experience = () => {
  return (
    <Box id='experience' padding= '10px'>
          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '70px', xs: '30px'}, width: {xs: '100%'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                What Experiences I have
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                My Experience
              </Typography>
          </Stack> 

          {/*******************************************  EXPERIENCE CARDS *************************************************/}
        <Stack sx= {{ flexDirection: { lg: 'row', sm: 'row', xs: 'column' } }}                     
                      gap= '10px'
                      justifyContent= 'center'>

          {/*******************************************  EXPERIENCE CARD ONE *************************************************/}

            <Stack className= 'card'>
              <Stack p= '20px'>
                  <Typography style={{ color: '#4db5ff', fontWeight: '600', fontSize: '20px', textAlign: 'center', paddingBottom: '20px' }}>
                    Frontend / Backend Development
                  </Typography>
                      <Stack sx= {{ flexDirection: { lg: 'column', xs: 'row' } }}>
                          <Stack sx= {{ flexDirection: { lg: 'row', xs: 'column' } }}>
                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>HTML</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>CSS</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>Bootstrap</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>
                          </Stack>    

                          <Stack sx= {{ flexDirection: { lg: 'row', xs: 'column' } }}>
                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>React</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                              </Stack>
                          </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>PHP</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Intermediate</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>My SQL</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>
                          </Stack>
                      </Stack>    
              </Stack>    
            </Stack> 

              {/*******************************************  EXPERIENCE CARD TWO *************************************************/}

              <Stack className= 'card'>
              <Stack p= '20px'>
                  <Typography style={{ color: '#4db5ff', fontWeight: '600', fontSize: '20px', textAlign: 'center', paddingBottom: '20px' }}>
                    Other Technologies
                  </Typography>
                      <Stack sx= {{ flexDirection: { lg: 'column', xs: 'row' } }}>
                          <Stack sx= {{ flexDirection: { lg: 'row', xs: 'column' } }}>
                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>MS Office</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>Power BI</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Intermediate</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>JIRA</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Intermediate</Typography>        
                                </Stack>
                              </Stack>
                          </Stack>    

                          <Stack sx= {{ flexDirection: { lg: 'row', xs: 'column' } }}>
                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>CMS</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Intermediate</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>WAN/LAN</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Intermediate</Typography>        
                                </Stack>
                              </Stack>

                              <Stack direction= 'row' gap= '20px' sx= {{ padding: {lg: '40px', xs: '20px'} }}>
                                <VerifiedIcon sx= {{ marginTop: '6px', color: 'var(--color-primary)' }} />
                                <Stack>
                                  <Typography style= {{ color: '#fff', fontWeight: '800', fontSize: '15px'}}>Cloud</Typography>     
                                  <Typography style= {{ color: '#a0a0aa', fontSize: '13px' }}>Experienced</Typography>        
                                </Stack>
                              </Stack>
                          </Stack>
                      </Stack>    
              </Stack>    
            </Stack> 
    </Stack>
    </Box>
  )
}

export default Experience

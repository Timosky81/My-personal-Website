import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';


const Skills = () => {
  return (
    <Box id='skills' padding= '50px'>
          <Stack textAlign= 'center' sx= {{ marginTop: {lg: '70px', xs: '100px'}, width: {xs: '100%'}}}>
              <Typography style={{ color: '#a0a0aa', fontWeight: '300', fontSize: '15px' }}>
                What Skills I have
              </Typography>       
              
              <Typography style={{ color: '#4db5ff', fontWeight: '700', fontSize: '30px', marginBottom: '50px' }}>
                My Skills
              </Typography>
          </Stack>

          <Stack sx= {{ flexDirection: { lg: 'row', sm: 'row', xs: 'column'} }}
                 gap= '30px'
                 justifyContent= 'center'>
                      {/****************************** SKILLS-LIST-ONE ******************************************/}
                <Stack className= 'skill-list'>
                      <Stack textAlign= 'center' bgcolor= 'var(--color-primary)'
                            padding= '35px'
                            borderRadius= '0 0 30px 30px'>
                        <Typography fontWeight= '600'>Personal Skills</Typography>
                      </Stack>
                      
                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Fast learner with a keen eye for details.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>A good decision maker and great problem solver.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>An excellent ability to grasp new concepts.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>An active listener with great interpersonal skill.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>A very high level of dependability and adaptability.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>A people person with the ability to see the best in people.</Typography>
                        
                      </Stack>    
                
                    </Stack>

                                {/****************************** SKILLS-LIST-TWO ******************************************/}
                <Stack className= 'skill-list'>
                      <Stack textAlign= 'center' bgcolor= 'var(--color-primary)'
                            padding= '35px'
                            borderRadius= '0 0 30px 30px'>
                        <Typography fontWeight= '600'>Organizational Skills</Typography>
                      </Stack>
                      
                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Great time manager who can work independently.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Highly focused and good team player.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Competent project management skills.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>A good pace setter and a strategic planner.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>A self-motivated and good collaborator.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Excellent decision maker with prioritization skills.</Typography>
                        
                      </Stack>    
                
                    </Stack>

                                {/****************************** SKILLS-LIST-THREE ******************************************/}
                <Stack className= 'skill-list'>
                      <Stack textAlign= 'center' bgcolor= 'var(--color-primary)'
                            padding= '35px'
                            borderRadius= '0 0 30px 30px'>
                        <Typography fontWeight= '600'>Technical Skills</Typography>
                      </Stack>
                      
                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Excellent with Microsoft packages and Google sheet.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Competent with data management and analysis.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Excellent in troubleshooting and fixing hardware/software problems.</Typography>
                        
                      </Stack>  

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Good understanding of computer network management.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Good knowledge in cloud technologies.</Typography>
                        
                      </Stack> 

                      <Stack direction= 'row' 
                            gap= '10px'
                            padding= '20px'
                            color= '#fff' >

                          <CheckIcon fontSize='small'/>
                          <Typography fontSize= '15px'>Ability to learn and work with several software applications and OS.</Typography>
                        
                      </Stack>    
                
                    </Stack>
          </Stack>    

    </Box>
  )
}

export default Skills
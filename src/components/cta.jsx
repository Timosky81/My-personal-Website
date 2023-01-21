import React from 'react'
import CV from '../assets/docs/myCV.pdf'
import '../App.css'

const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download target='_blank' rel= 'noreferrer' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default cta
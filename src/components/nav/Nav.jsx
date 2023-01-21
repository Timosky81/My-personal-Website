import React from 'react'
import './nav.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><HomeIcon/></a> 
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><InfoIcon/></a> 
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BeenhereIcon/></a> 
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><WorkspacePremiumIcon/></a> 
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><WorkIcon/></a> 
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><ChatIcon/></a> 

    </nav>
  )
}

export default Nav 
import React from 'react'


import LogoImg from '../../assets/images/logo1.png'

const Logo = () => {
  return (
    <div>
        <img src={LogoImg} alt='Logo' style={{
        width: '48px', height: '48px', margin: '0 15px' }}/> 
    </div>
  )
}

export default Logo
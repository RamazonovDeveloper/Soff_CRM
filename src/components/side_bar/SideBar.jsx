import React from 'react'
import './sideBar.css'
import logo from '../../assets/logo.svg'

import sideLogo from '../../assets/color-swatch.png'

function SideBar() {
  return (
    <div className='left'>
      <div className='side__bar-logo'>
        <img src={logo} alt="" />
      </div>
      <div className='side__bar'>
        
        <div className='side__bar-item'>
          <img src={sideLogo} alt="" />
          <p>Posts</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar

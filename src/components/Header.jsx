import React from 'react'

import MoonIcon from '../assets/icons/moon-outline.svg'

const Header = () => {
  return (
    <header className='header'>
      <h3>Where in the world?</h3>
      <p className='header--buttom'>
        {/* <img className='header--icon icon-24' src={MoonIcon} alt='React Logo' /> */}
        Dark Mode
      </p>
    </header>
  )
}

export default Header

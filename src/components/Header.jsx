import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    document.body.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  return (
    <header className='header'>
      <h3>Where in the world?</h3>
      <p className='header--buttom' onClick={handleClick}>
        {darkMode ? (
          <>
            <ion-icon class='header--icon' name='moon'></ion-icon>
            Dark Mode
          </>
        ) : (
          <>
            <ion-icon class='header--icon' name='moon-outline'></ion-icon>
            Light Mode
          </>
        )}
      </p>
    </header>
  )
}

export default Header

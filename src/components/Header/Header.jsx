import React from 'react'
import NavBar from '../NavBar/NavBar'
const Header = ({nightModeSwitch}) => {
    return (
        <div className='Header'>
            <button onClick={nightModeSwitch}>night Mode</button>
            <NavBar/>
        </div>
    )
}

export default Header

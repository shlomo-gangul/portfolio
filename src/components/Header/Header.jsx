import React from 'react'
import NavBar from '../NavBar/NavBar'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import './Header.css'
const Header = ({nightModeSwitch}) => {
    return (
        <div className='Header'>
            <button className='button' onClick={nightModeSwitch}><Brightness4Icon /></button>
            <NavBar/>
        </div>
    )
}

export default Header

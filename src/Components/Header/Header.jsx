import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'

const Header = () => {
  return (
    <nav className='header'>
        
        <img src={logo} alt='logo'/>

        <div>
           <Link to='/home'>Home</Link>
            <Link to='/tvshows'>TV Shows</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/recently'>Recently Added</Link>
            <Link to='/list'>My List</Link>
        </div>
        <ImSearch/>
        <Link to='/signin'>LogIn</Link>
    </nav>
  )
}

export default Header
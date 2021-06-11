import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
      <div className='headerContainer' >
        <Link className='navText' to='/'>Home</Link>
        <Link className='navText' to='/projects'>Projects</Link>
        <Link className='navText' to='/contact'>Connect</Link>
      </div>
  )
};

export default Header;
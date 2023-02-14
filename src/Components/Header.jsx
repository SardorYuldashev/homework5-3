import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className='header-link'>Home</Link>
      <Link to="/about" className='header-link'>About</Link>
      <Link to="/products" className='header-link'>Products</Link>
      <Link to="/contact" className='header-link'>Contact</Link>
      <Link to="/login" className='header-link'>Login</Link>
    </header>
  )
}

export default Header

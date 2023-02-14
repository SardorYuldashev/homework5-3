import React from 'react'
import { Outlet } from 'react-router-dom'
import Counter from '../Components/Counter'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />      
    </div>
  )
}

export default Home

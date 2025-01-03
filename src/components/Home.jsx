import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'

function Home() {
  return (
  <div className='bg-black dark:bg-gray-900 min-h-screen overflow-x-hidden'>
  <Navbar />
  <Profile />  
  
  </div>
  )
}

export default Home
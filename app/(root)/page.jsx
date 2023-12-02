import React from 'react'
import Home from '../../components/Home'
import Tool from '../../components/Tool';
import Usage from '../../components/Usage';
import About from '../../components/About';



export default function () {
  return (
    <div className='sm:mx-5 lg:mx-44'>
      <Home />
      <About />
      <Usage />
      <Tool />
  </div>
  )
}

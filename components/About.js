import React from 'react'
import Steps from './about/Steps'

export default function About() {
  return (
    <div>
        <div>
            <h1 className='header lg:text-5xl text-center m-56'>Overview</h1>
        </div>
        <div>
            <Steps />
        </div>
    </div>
  )
}

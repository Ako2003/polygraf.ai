import React from 'react'
import Steps from './usage/Steps'
import { steps } from '../constants/cards'

export default function Usage() {
  return (
    <div id='usage'>
        <div>
            <h1 className='header lg:text-5xl text-center m-10'>How to use it</h1>
        </div>
        <div className='grid gap-2 lg:grid-cols-4 grid-cols-2 max-md:mx-8'>
          {steps.map((step, index) => (
            <Steps key={index} step={step}/>
          ))}
        </div>
    </div>
  )
}

import React from 'react'
import Cards from './Cards'
import {advantage} from "../constants/cards";


export default function Welcome() {
  return (
    <div>
        <section>
          <div className='welcome sm:text-4xl text-2xl'>
            <h1><strong>Polygraf.ai</strong> Face Detection</h1>
          </div>
            <p className="text-default-500 max-w-screen-sm">Discover our powerful tool, swiftly recognize faces within videos. Experience seamless face detection technology like never before!</p>
        </section>
        <section>
        </section>
    </div>
  )
}

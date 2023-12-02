import React from 'react'
import Cards from './Cards'
import {advantage} from "../../constants/cards";


export default function Welcome() {
  return (
    <div>
        <section>
          <div className='header lg:text-4xl'>
            <h1><strong>Polygraf.ai</strong> Face Detection</h1>
          </div>
            <p className="text-default-500 max-w-screen-sm">Discover our powerful tool, swiftly recognize faces within images and videos. Experience seamless face detection technology like never before!</p>
        </section>
        <section>
        </section>
    </div>
  )
}

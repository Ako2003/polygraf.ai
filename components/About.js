"use client";
import React from 'react'
import Timeline from './about/Timeline'
import { useRouter } from 'next/navigation'

export default function About() {
  return (
    <div id='about' className='mt-10'>
        <h1 className='header text-center lg:text-5xl'>About <br /><strong>Face Detection</strong></h1>
        <div className='mt-16'>
            <Timeline />
        </div>
    </div>
  )
}

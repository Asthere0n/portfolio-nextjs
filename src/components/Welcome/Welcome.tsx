import React from 'react'
import { MatrixText } from '../ui/matrix-text'
import WorldMap from '../WorldMap/WorldMap'

export default function Welcome() {
  return (
    <div className='flex flex-col justify-center items-center w-[100dvw] h-[100dvh] overflow-hidden'>
      <WorldMap />
      <div className='flex flex-col lg:flex-row justify-center items-center w-full mb-4'>
        <h1 className='text-3xl sm:text-5xl m-5'>Welcome to my <span className='text-yellow-400'></span></h1>
        <MatrixText
          text="Portfolio"
          initialDelay={200}
          letterAnimationDuration={500}
          letterInterval={100}
        />
      </div>
      <h2 className='text-xl lg:text-3xl text-slate-400 max-w-[80%] text-justify p-4 md:py-12 md:px-18 bg-slate-950'>Making the world a better place, one commit at a time</h2>
    </div>
  )
}

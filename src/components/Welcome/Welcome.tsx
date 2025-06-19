import React from 'react'
import { MatrixText } from '../ui/matrix-text'
import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100dvh] overflow-hidden'>
      <div className='flex justify-center items-center w-full'>
        <h1 className='text-5xl m-5'>Welcome to my <span className='text-yellow-400'></span></h1>
        <MatrixText
          text="Portfolio"
          initialDelay={200}
          letterAnimationDuration={500}
          letterInterval={100}
        />
      </div>
      <h2 className='text-2xl text-slate-400 mt-1'>Making the world a better place, one commit at a time</h2>
    </div>
  )
}

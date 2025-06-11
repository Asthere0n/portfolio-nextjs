import React from 'react'

export default function Welcome() {
  // TODO: Animate the yellow span to transition from white to yellow
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100dvh]'>
      <h1 className='text-5xl m-5'>Welcome to my <span className='text-yellow-400'>Portfolio</span></h1> 
      <h2 className='text-xl'>Making the world a better place, one commit at a time</h2>
    </div>
  )
}

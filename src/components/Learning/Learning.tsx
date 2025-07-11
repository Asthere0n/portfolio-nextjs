import React from 'react'
import { LearningCaroussel } from './LearningCaroussel'

export default function Learning() {
  return (
    <div className='h-fit lg:min-h-screen w-full my-4 lg:my-40 flex flex-col items-center'>
      <div className='h-fit w-[80%]'>
        <h2 className='text-5xl my-8'>Sources I've <span className='text-yellow-400'>learned</span> from</h2>
        <h3 className='text-2xl text-slate-400'>If you either are another Junior Developer or if you want to sharp your edge, this are some resources I founded very useful and interesting. </h3>
      </div>
      <LearningCaroussel />
    </div>
  )
}

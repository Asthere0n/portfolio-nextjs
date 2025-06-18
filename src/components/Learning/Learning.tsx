import React from 'react'
import { LearningCaroussel } from './LearningCaroussel'

export default function Learning() {
  return (
    <div className='min-h-screen my-20 flex flex-col items-center'>
      <div className='h-fit w-[80%]'>
        <h2 className='text-3xl'>Sources I've learned from</h2>
        <h3 className='text-2xl text-slate-500'>If you either are another Junior Developer or if you want to sharp your edge, this are some resources I founded very useful and interesting. </h3>
      </div>
      <LearningCaroussel />
    </div>
  )
}

import React from 'react'
import { LearningCaroussel } from './LearningCaroussel'

export default function Learning() {
  return (
      <div className='h-screen'>
      <h2 className='text-3xl'>Sources I've learned from</h2>
      <h3 className='text-2xl text-slate-600'>If you either are another Junior Developer or if you want to sharp your edge, this are some resources I founded very useful and interesting. </h3>
      <LearningCaroussel/>
    </div>
  )
}

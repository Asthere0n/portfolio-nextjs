import React from 'react'
import ContactLinks from '../ContactLinks/ContactLinks'
import EmploymentStatus from './EmploymentStatus/EmploymentStatus'

export default function Contact() {
  return (
    <div className='h-150 bg-slate-800 w-full flex flex-col justify-around items-center'>
      <div className='flex flex-col gap-4 items-center'>
      <EmploymentStatus/>
      <h2 className='text-3xl'> If you've got this far, I think you shoudl give me a call</h2>
      </div>
      <ContactLinks/>
    </div>
  )
}

import React from 'react'
import ContactLinks from '../ContactLinks/ContactLinks'
import EmploymentStatus from './EmploymentStatus/EmploymentStatus'

export default function Contact() {
  return (
    <div className='h-150 bg-slate-800 w-full flex flex-col justify-around items-center'>
      <EmploymentStatus/>
      <h2 className='text-3xl'> If you've got this far, I think you owe me a call</h2>
      <ContactLinks/>
    </div>
  )
}

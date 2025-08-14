import React from 'react'
import ContactLinks from '../ContactLinks/ContactLinks'
import EmploymentStatus from './EmploymentStatus/EmploymentStatus'

export default function Contact() {
  return (
    <div className='min-h-160 bg-slate-950 w-full flex flex-col justify-center items-center overflow-hidden'
      style={{
      backgroundImage: `
      linear-gradient(
      to top,
      rgba(2, 6, 23, 0) 0%,
      rgba(2, 6, 23, 1) 98%,
      rgba(2, 6, 23, 1) 100%
      ),
      url('/img/ContactBackground.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      }}>
      <div className='flex flex-col p-8 gap-4 items-center justify-center w-[90%] md:w-[50%] h-fit md:mx-8 rounded-2xl border-4 border-slate-500'
      style={{ backgroundColor: 'rgba(2, 6, 23, 0.85)' }}>
      <EmploymentStatus />
      <h2 className='text-2xl'> If you've got this far, I think we should get in touch.</h2>
      <ContactLinks />
      </div>
    </div>
  )
}

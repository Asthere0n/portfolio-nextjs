import React from 'react'
import Image from 'next/image'
import ContactLinks from '../ContactLinks/ContactLinks'
import SpainFlag from '../../../public/icons/SpainFlag'
import UKFlag from '../../../public/icons/UKFlag'
import EmploymentStatus from '../Contact/EmploymentStatus/EmploymentStatus'

export default function Hero() {
  return (
    <div className='w-screen min-h-[100dvh] flex flex-col lg:flex-row justify-center items-center p-8 bg-slate-700 border-y-4 border-slate-500 overflow-x-hidden'>
      <div className="w-[374px] h-[374px] bg-gradient-to-b from-slate-700 via-amber-600 to-yellow-400 flex justify-center items-center rounded-full animate-spin" style={{ animationDuration: '6s' }}>
        <Image src="/Portrait.webp" height={500} width={500} alt='Portrait of a beatiful Spanish full-stack developer' className='rounded-full h-90 w-90 m-15 scale-x-[-1] spin-reverse animate-spin' style={{ animationDuration: '6s' }} />
      </div>
      <div className='flex flex-col gap-8 justify-center items-center md:items-start md:p-12 mt-8 md:m-0'>
        <h2 className='text-4xl p-5 w-full'>Hi! I am <span className='text-yellow-400 font-semibold'>Cristian Sanchez</span></h2>
        <div className='flex flex-col md:flex-row gap-4 items-center bg-slate-900 rounded-2xl p-8 border-2 border-slate-800'>
          <div className='flex gap-2 items-center '>
            <SpainFlag className='w-12' />
            <UKFlag className='w-12' />
            <h3 className='text-white text-3xl'>Bilingual </h3>
          </div>
          <EmploymentStatus />
        </div>
        <p className='text-lg p-5 text-justify text-white w-[30ch] md:w-[55ch]'>
          A former hospitality manager turned <span className='text-yellow-400 font-semibold'>Full-Stack Developer</span>. I use to lead teams in fast-paced environments - now I build responsive, user-focused web apps and tools using the MERN stack. Same chaos, just less dirty laundry.
        </p>
        <ContactLinks />
      </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import ContactLinks from '../ContactLinks/ContactLinks'
import SpainFlag from '../../../public/icons/SpainFlag'
import UKFlag from '../../../public/icons/UKFlag'

export default function Hero() {
  return (
    <div className='w-full h-[100dvh] flex justify-center items-center px-8'>
      <Image src="/Portrait.webp" height={500} width={500} alt='Portrait of a beatiful Spanish full-stack developer' className='rounded-full h-90 w-90 m-15' />
      <div className='flex flex-col gap-8 items-start p-12'>
        <h2 className='text-5xl p-5'>Hi! I am <span className='text-yellow-400'>Cristian Sanchez</span></h2>
        <div className='flex gap-5 px-5 items-center'>
          <SpainFlag className='w-12' />
          <UKFlag className='w-12' />
          <h3 className='text-slate-400 text-3xl'>Bylingual | <span className='text-xl text-green-400 p-3 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-white hover:font-weight-bold'>LOOKING FOR WORK</span></h3>
        </div>
        <p className='text-lg p-5 text-justify'>
          A former hospitality manager turned <span className='text-yellow-400'>Full-Stack Developer</span>. I use to lead teams in fast-paced environments - now I build responsive, user-focused web apps and tools using the MERN stack. Same chaos, just less dirty laundry.
        </p>
        <ContactLinks />
      </div>
    </div>
  )
}

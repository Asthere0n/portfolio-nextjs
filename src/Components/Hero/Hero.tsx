import React from 'react'
import Image from 'next/image'
import ContactLinks from '../ContactLinks/ContactLinks'

export default function Hero() {
  return (
    <div className='w-full h-[100dvh] flex justify-center items-center px-8'>
      <Image src="/Portrait.webp" height={500} width={500} alt='Portrait of a beatiful Spanish full-stack developer' className='rounded-full h-90 w-90 m-15' />
      <div className='flex flex-col gap-8 items-start p-12'>
        <h2 className='text-5xl p-5'>Hi! I am <span className='text-yellow-400'>Cristian Sanchez</span></h2>
        <p className='text-lg p-5 text-justify'>
          A former hospitality manager turned <span className='text-yellow-400'>Full-Stack Developer</span>. I use to lead teams in fast-paced environments - now I build responsive, user-focused web apps and tools using the MERN stack. Same chaos, just less dirty laundry.
        </p>
      <ContactLinks />
      </div>
    </div>
  )
}

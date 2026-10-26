"use client";

import React from 'react'
import { motion, useReducedMotion, m } from "motion/react"
import ContactLinks from '../ContactLinks/ContactLinks'
import EmploymentStatus from './EmploymentStatus/EmploymentStatus'
import { EASE_OUT_EXPO } from '../ui/motion-config'

export default function Contact() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <div className='min-h-[40rem] bg-slate-950 w-full flex flex-col justify-center items-center overflow-hidden relative'
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
      {/* Slow zoom on the backdrop keeps the closing section alive without
          pulling attention away from the call to action. */}
      <m.div
      aria-hidden="true"
      className="absolute inset-0 bg-cover bg-left"
      style={{
        backgroundImage: "url('/img/ContactBackground.jpg')",
      }}
      animate={
        prefersReducedMotion
          ? undefined
          : { scale: [1, 1.12, 1], backgroundPosition: ["left center", "60% center", "left center"] }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 24, ease: "easeInOut", repeat: Infinity }
      }
      />

      <m.div
      className='relative flex flex-col p-8 gap-4 items-center justify-center w-[90%] lg:w-[50%] h-fit md:mx-8 rounded-2xl border-4 border-slate-500'
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: EASE_OUT_EXPO }}
      style={{ backgroundColor: 'rgba(2, 6, 23, 0.85)' }}
      >
      <EmploymentStatus />
      <h2 className='text-2xl py-4'> If you've got this far, I think we should get in touch.</h2>
      <ContactLinks />
      </m.div>
    </div>
    )
}

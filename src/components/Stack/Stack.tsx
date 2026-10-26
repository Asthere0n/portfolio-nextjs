"use client";

import React from 'react'
import { motion, useReducedMotion, m } from "motion/react"

// Components
import MERNLetter from './MERNLetter/MERNLetter'
import MongoDB from '../../../public/icons/MongoDB'
import Expressjs from '../../../public/icons/Expressjs'
import ReactJS from '../../../public/icons/ReactJS'
import Nodejs from '../../../public/icons/Nodejs'
import JavaScript from '../../../public/icons/JavaScript'
import TailwindCSS from '../../../public/icons/TailwindCSS'
import Nextjs from '../../../public/icons/Nextjs'
import GitHub from '../ContactLinks/SVG/GitHub'
import PostgreSQL from '../../../public/icons/PostgreSQL'
import MySQL from '../../../public/icons/MySQL'
import HTML from '../../../public/icons/HTML'
import CSS from '../../../public/icons/CSS'
import Astro from '../../../public/icons/Astro'
import { EASE_OUT_EXPO } from '../ui/motion-config'

const technologies = [
  { icon: <JavaScript />, label: 'JavaScript', className: 'bg-yellow-400 text-black' },
  { icon: <TailwindCSS />, label: 'Tailwind', className: 'bg-cyan-700 text-white' },
  { icon: <Nextjs />, label: 'NextJS', className: 'bg-black' },
  { icon: <GitHub />, label: 'GitHub', className: 'bg-gray-900' },
  { icon: <PostgreSQL />, label: 'PostgreSQL', className: 'bg-blue-600 text-white' },
  { icon: <MySQL />, label: 'MySQL', className: 'bg-cyan-600 text-white' },
  { icon: <HTML />, label: 'HTML', className: 'bg-amber-500' },
  { icon: <CSS />, label: 'CSS', className: 'bg-violet-600' },
  { icon: <Astro />, label: 'Astro', className: 'bg-orange-500 text-black' },
]

export default function Stack() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <div className='w-full min-h-[100dvh] flex flex-col justify-center'>
            <div className=' flex flex-col items-start lg:flex-row w-full justify-center md:items-start lg:px-28 pt-16'>

                <div className='md:m-8 w-[90%] lg:w-[60%] '>
                    <m.h2
                    className='text-3xl md:text-5xl text-slate-200 ml-4'
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: EASE_OUT_EXPO }}
                    >
                    But what's <span className='text-yellow-400'>MERN</span>?
                    </m.h2>

                    <m.p
                    className='text-2xl text-slate-400 w-full md:w-[45ch] ml-4 my-5 text-justify'
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 }}
                    >
                    MERN is the set of tools of my choice that allow me to build complete application from top to bottom without ever leaving JavaScript.
                    </m.p>

                    <MERNLetter name='MongoDB' delay={0} icon={<MongoDB />} color='green' subtitle='NoSQL Database' />
                    <MERNLetter name='Express' delay={0.1} icon={<Expressjs />} color='yellow' subtitle='Back end Framework to build RESTful APIs' />
                    <MERNLetter name='React' delay={0.1} icon={<ReactJS />} color='cyan' subtitle='Front end Framework to build UIs' />
                    <MERNLetter name='NodeJs' delay={0.3} icon={<Nodejs />} color='lime' subtitle='JavaScript Runtime environment' />
                </div>

                <div className="flex flex-col my-8 lg:m-8 items-center lg:items-start ml-12">
                    <m.h3
                    className='text-2xl md:text-4xl w-full ml-8 mb-8 text-slate-200'
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: EASE_OUT_EXPO }}
                    >
                    Other <span className='text-yellow-400'>Technologies</span>
                    </m.h3>

                    <m.ul
                    className="grid grid-cols-3 w-fit justify-center items-center"
                    initial={prefersReducedMotion ? false : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                        },
                    }}
                    >
                        {technologies.map((tech) => (
                            <m.li
                            key={tech.label}
                            variants={{
                                hidden: { opacity: 0, scale: 0.7 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={prefersReducedMotion ? undefined : { duration: 0.4, ease: EASE_OUT_EXPO }}
                            whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -4 }}
                            className={`font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 ${tech.className}`}
                            >
                            {tech.icon} {tech.label}
                            </m.li>
                        ))}
                    </m.ul>
                </div>
            </div>
        </div>
    )
}

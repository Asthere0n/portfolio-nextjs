"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, m } from "motion/react";

export interface Props {
    title: string,
    company: string,
    dates: string,
    location: string,
    description: string,
    src: string,
    responsabilities: string[]
}

export default function WorkCard(props: Props) {
    const prefersReducedMotion = useReducedMotion()
    const [flipped, setFlipped] = useState(false)

    return (
        <m.div
        className="w-full"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={prefersReducedMotion ? undefined : { duration: 0.5 }}
        >
            {/* Outer element owns the perspective. The rotating element is a
                separate child so that `perspective` and `transform` never
                compete for the same box — that combination is what breaks
                3D flips in CSS. */}
            <div
            className="w-full"
            style={{ perspective: 1000 }}
            onMouseEnter={() => !prefersReducedMotion && setFlipped(true)}
            onMouseLeave={() => !prefersReducedMotion && setFlipped(false)}
            >
                <m.div
                className="relative w-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={prefersReducedMotion ? undefined : { rotateY: flipped ? 180 : 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.7, ease: "easeInOut" }}
                >
                    {/* Front face */}
                    <div className="w-[300px] h-[400px] sm:w-full sm:h-full flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 p-6 rounded-2xl border-2 justify-around items-start border-slate-600 bg-slate-800 overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}>
                        <div className=' flex justify-start items-center gap-4 col-start-1 col-end-4' >
                            <Image src={props.src} alt='' width={80} height={80} className='rounded-md' />
                            <div className='flex flex-col items-start'>
                                <p className='text-2xl text-slate-300'>{props.company}</p>
                                <p className='text-2xl font-bold'>{props.title}</p>
                            </div>
                        </div>
                        <div className='row-start-2 row-end-4 flex flex-col justify-center items-start h-full text-sm md:text-lg'>
                            <p className='font-semibold'>{props.location}</p>
                            <p>{props.dates}</p>
                        </div>
                        <ul className='row-start-2 row-end-4 col-start-2 col-end-4 flex flex-col h-full gap-1 px-8 md:border-l-2 border-slate-600 justify-center items-start text-sm md:text-lg'>
                            {props.responsabilities.map((resp, idx) => (
                                <li key={"id" + idx} className='list-disc text-left'>{resp}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Back face */}
                    <div className="absolute inset-0 w-[300px] h-[400px] text-sm sm:text-xl sm:w-full sm:h-full flex rounded-2xl border-2 border-slate-600 bg-slate-800 overflow-hidden p-4 px-8"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                        <p className='text-left flex h-full items-center'>{props.description}</p>
                    </div>
                </m.div>
            </div>
        </m.div>
    )
}

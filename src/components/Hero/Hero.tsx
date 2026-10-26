"use client";

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ContactLinks from '../ContactLinks/ContactLinks'
import SpainFlag from '../../../public/icons/SpainFlag'
import UKFlag from '../../../public/icons/UKFlag'
import EmploymentStatus from '../Contact/EmploymentStatus/EmploymentStatus'
import { EASE_OUT_EXPO, SPRING_SOFT } from '../ui/motion-config'

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // The portrait drifts slower than the page, creating depth.
    const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    const entrance = prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: EASE_OUT_EXPO },
        };

    return (
        <div
        ref={containerRef}
        className='w-screen min-h-[100dvh] flex flex-col lg:flex-row justify-center items-center p-8 bg-slate-700 border-y-4 border-slate-500 overflow-x-hidden'
        >
        <motion.div
        style={prefersReducedMotion ? undefined : { y: portraitY, scale: portraitScale }}
        className='flex justify-center'
        >
        <motion.div
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { ...SPRING_SOFT, delay: 0.1 }
        }
        >
        <Image
        src='/img/Portrait.webp'
        alt='beatiful Spanish developer'
        height={600}
        width={600}
        className='w-[300px] md:w-[600px] rounded-3xl mt-12 border-slate-500 border-6 scale-x-[-1] '
        />
        </motion.div>
        </motion.div>

        <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY }}
        className="flex flex-col gap-8 justify-center items-center md:items-start md:p-12 mt-8 md:m-0"
        >
        <motion.h2
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.25 }
        }
        className='text-4xl p-5 w-full'
        >
        Hi! I am <span className='text-yellow-400 font-semibold'>Cristian Sanchez</span>
        </motion.h2>

        <motion.div
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.4 }
        }
        className='flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900 rounded-2xl p-8 border-2 border-slate-800 w-full'
        >
        <div className='flex gap-2 items-center '>
        <motion.span
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={prefersReducedMotion ? undefined : { ...SPRING_SOFT, delay: 0.55 }}
        >
        <SpainFlag className='w-12' />
        </motion.span>
        <motion.span
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotate: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={prefersReducedMotion ? undefined : { ...SPRING_SOFT, delay: 0.65 }}
        >
        <UKFlag className='w-12' />
        </motion.span>
        <h3 className='text-white text-3xl ml-2'>Bilingual </h3>
        </div>
        <EmploymentStatus />
        </motion.div>

        <motion.p
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.55 }
        }
        className='text-lg p-5 text-justify text-white w-[30ch] md:w-[55ch]'
        >
        A former hospitality manager turned <span className='text-yellow-400 font-semibold'>Full-Stack Web Developer</span>. I use to lead teams in fast-paced environments - now I build responsive, user-focused web apps and tools using the MERN stack. Same chaos, just less dirty laundry.
        </motion.p>

        <motion.div
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.7 }
        }
        >
        <ContactLinks />
        </motion.div>
        </motion.div>
    </div>
    )
}

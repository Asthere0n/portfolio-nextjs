"use client";

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform, m } from "motion/react";
import { useRef, useState } from "react";
import ContactLinks from '../ContactLinks/ContactLinks'
import SpainFlag from '../../../public/icons/SpainFlag'
import UKFlag from '../../../public/icons/UKFlag'
import EmploymentStatus from '../Contact/EmploymentStatus/EmploymentStatus'
import { EASE_OUT_EXPO, SPRING_SOFT } from '../ui/motion-config'

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const [portraitHovered, setPortraitHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // The portrait drifts slower than the page, creating depth.
    const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const portraitRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
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
        <m.div
        style={prefersReducedMotion ? undefined : { y: portraitY, scale: portraitScale, rotate: portraitRotate }}
        className='flex justify-center relative'
        >
        {/* Soft amber halo that pulses behind the portrait. */}
        {!prefersReducedMotion && (
            <m.div
            aria-hidden="true"
            className='absolute inset-0 rounded-[3rem] bg-yellow-400/30 blur-3xl'
            animate={{
                scale: [0.92, 1.08, 0.92],
                opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
            }}
            />
        )}

        <m.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? undefined : { ...SPRING_SOFT, delay: 0.1 }}
        className='relative'
        onHoverStart={() => !prefersReducedMotion && setPortraitHovered(true)}
        onHoverEnd={() => !prefersReducedMotion && setPortraitHovered(false)}
        >
        {/* Rotating arc that frames the portrait on hover. */}
        {!prefersReducedMotion && (
            <m.svg
            aria-hidden="true"
            className='absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] overflow-visible'
            viewBox='0 0 100 100'
            fill='none'
            animate={{ rotate: portraitHovered ? 360 : 0, opacity: portraitHovered ? 1 : 0 }}
            transition={
                portraitHovered
                    ? { rotate: { duration: 4, ease: "linear", repeat: Infinity }, opacity: { duration: 0.3 } }
                    : { duration: 0.3 }
            }
            style={{ transformOrigin: "50% 50%" }}
            >
                <defs>
                    <linearGradient id="portrait-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor='#facc15' stopOpacity='1' />
                        <stop offset="55%" stopColor='#facc15' stopOpacity='0.15' />
                        <stop offset="100%" stopColor='#facc15' stopOpacity='0' />
                    </linearGradient>
                </defs>
                <circle
                cx='50'
                cy='50'
                r='48'
                stroke='url(#portrait-ring-gradient)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='80 220'
                />
            </m.svg>
        )}

        {/* Light sweep travelling across the portrait on hover. */}
        {!prefersReducedMotion && (
            <m.div
            aria-hidden="true"
            className='absolute inset-0 rounded-3xl overflow-hidden pointer-events-none'
            >
            <m.div
            className='absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent'
            initial={{ x: '-120%' }}
            animate={{ x: portraitHovered ? '520%' : '-120%' }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            </m.div>
        )}

        <m.div
        className='relative rounded-3xl overflow-hidden'
        animate={
            prefersReducedMotion
            ? undefined
            : {
                boxShadow: portraitHovered
                ? '0 25px 60px -15px rgba(250, 204, 21, 0.45)'
                : '0 25px 60px -15px rgba(15, 23, 42, 0.6)',
                scale: portraitHovered ? 1.04 : 1,
                y: portraitHovered ? -8 : 0,
            }
        }
        transition={prefersReducedMotion ? undefined : { duration: 0.35 }}
        >
        <Image
        src='/img/Portrait.webp'
        alt='beatiful Spanish developer'
        height={600}
        width={600}
        className='w-[300px] md:w-[600px] scale-x-[-1] block'
        />
        {/* Subtle colour wash that lifts the portrait off the grey panel. */}
        <div className='absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-cyan-400/10 mix-blend-overlay pointer-events-none' />
        </m.div>
        </m.div>
        </m.div>

        <m.div
        style={prefersReducedMotion ? undefined : { y: contentY }}
        className="flex flex-col gap-8 justify-center items-center md:items-start md:p-12 mt-8 md:m-0"
        >
        <m.h2
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.25 }
        }
        className='text-4xl p-5 w-full'
        >
        Hi! I am <span className='text-yellow-400 font-semibold'>Cristian Sanchez</span>
        </m.h2>

        <m.div
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.4 }
        }
        className='flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900 rounded-2xl p-8 border-2 border-slate-800 w-full'
        >
        <div className='flex gap-2 items-center '>
        <m.span
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={prefersReducedMotion ? undefined : { ...SPRING_SOFT, delay: 0.55 }}
        >
        <SpainFlag className='w-12' />
        </m.span>
        <m.span
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotate: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={prefersReducedMotion ? undefined : { ...SPRING_SOFT, delay: 0.65 }}
        >
        <UKFlag className='w-12' />
        </m.span>
        <h3 className='text-white text-3xl ml-2'>Bilingual </h3>
        </div>
        <EmploymentStatus />
        </m.div>

        <m.p
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.55 }
        }
        className='text-lg p-5 text-justify text-white w-[30ch] md:w-[55ch]'
        >
        A former hospitality manager turned <span className='text-yellow-400 font-semibold'>Full-Stack Web Developer</span>. I use to lead teams in fast-paced environments - now I build responsive, user-focused web apps and tools using the MERN stack. Same chaos, just less dirty laundry.
        </m.p>

        <m.div
        {...entrance}
        transition={
            prefersReducedMotion
            ? undefined
            : { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.7 }
        }
        >
        <ContactLinks />
        </m.div>
        </m.div>
    </div>
    )
}

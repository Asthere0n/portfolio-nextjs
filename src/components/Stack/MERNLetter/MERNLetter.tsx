"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, SPRING_SOFT } from '../../ui/motion-config'

export interface Props {
  name: string,
  color: string,
  icon: any,
  delay: number
  subtitle: string
}

/**
 * Tailwind cannot see dynamically constructed class names, so the colour is
 * resolved through an explicit map. Without this the `bg-*` / `text-*`
 * utilities would never be generated and the badges would render unstyled.
 */
const colorClasses: Record<string, { badge: string; accent: string }> = {
  green: { badge: 'bg-green-400', accent: 'text-green-400' },
  yellow: { badge: 'bg-yellow-400', accent: 'text-yellow-400' },
  cyan: { badge: 'bg-cyan-400', accent: 'text-cyan-400' },
  lime: { badge: 'bg-lime-400', accent: 'text-lime-400' },
}

export default function MERNLetter(props: Props) {
  const name = props.name
  const initial = name.slice(0, 1)
  const rest = name.slice(1)
  const prefersReducedMotion = useReducedMotion()

  const palette = colorClasses[props.color] ?? colorClasses.cyan

  return (
    <motion.div
    className='text-slate-200 flex items-center'
    initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
    whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={
      prefersReducedMotion
        ? undefined
        : { duration: 0.5, ease: EASE_OUT_EXPO, delay: props.delay }
    }
    >
      <motion.div
      className={`${palette.badge} border-4 border-slate-200 text-5xl w-20 h-20 flex justify-center items-center p-4 rounded-full m-4`}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
      transition={prefersReducedMotion ? undefined : SPRING_SOFT}
      >
      {props.icon}
      </motion.div>
      <div>
      <h4 className='text-4xl text-slate-200'><span className={`text-4xl ${palette.accent}`}>{initial}</span>{rest}</h4>
        <p className='text-xl text-slate-400'>{props.subtitle}</p>
      </div>
    </motion.div>
  )
}

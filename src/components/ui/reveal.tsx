"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  DURATIONS,
  EASE_OUT_EXPO,
  REVEAL_OFFSET,
  VIEWPORT,
  revealVariants,
  staggerContainerVariants,
} from "./motion-config";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Direction the element travels from before settling in place. */
  from?: "bottom" | "top" | "left" | "right" | "none";
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Seconds to wait for the element to enter the viewport. */
  duration?: number;
  /** Stagger children instead of animating the wrapper as a single block. */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3" | "ul";
}

/**
 * Scroll-triggered reveal wrapper.
 *
 * Animates its children the first time they scroll into view. Elements that
 * opt into `stagger` get a container variant so their direct children can
 * each define their own `hidden`/`visible` states.
 *
 * When the user prefers reduced motion the content is rendered in its final
 * state immediately — no fade, no movement — so nothing is ever stuck
 * invisible.
 */
export function Reveal({
  children,
  className,
  from = "bottom",
  delay = 0,
  duration = DURATIONS.base,
  stagger = false,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const offsets: Record<NonNullable<RevealProps["from"]>, { x: number; y: number }> = {
    bottom: { x: 0, y: REVEAL_OFFSET },
    top: { x: 0, y: -REVEAL_OFFSET },
    left: { x: REVEAL_OFFSET, y: 0 },
    right: { x: -REVEAL_OFFSET, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[from];

  return (
    <MotionTag
      className={className}
      variants={stagger ? staggerContainerVariants : revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Child variant for elements inside a `stagger` reveal.
 * Keeps the entrance consistent with the rest of the site.
 */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span" | "p" | "h2" | "h3";
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={revealVariants}>
      {children}
    </MotionTag>
  );
}

export { revealVariants, staggerContainerVariants };
export { cn };

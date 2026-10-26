import type { Transition, Variants } from "motion/react";

/**
 * Shared motion primitives.
 *
 * Every animation in the app pulls its easing, duration and variants from
 * here so that the whole site feels like a single system instead of a
 * collection of one-off tweens.
 */

/** Exponential ease-out. Snappy on entry, no visible rubber-banding. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Softer ease used for elements that travel a longer distance. */
export const EASE_OUT_SOFT = [0.25, 0.46, 0.45, 0.94] as const;

/** Gentle spring for cards and interactive elements. */
export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 24,
  mass: 0.9,
};

export const DURATIONS = {
  fast: 0.25,
  base: 0.45,
  slow: 0.8,
} as const;

/** Distance in px that reveal animations travel upwards. */
export const REVEAL_OFFSET = 24;

/**
 * Base variant for a single element fading in while drifting up.
 * `whileInView` drives it, so it plays the moment it scrolls into view.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASE_OUT_EXPO },
  },
};

/**
 * Container variant for staggered lists. Children must use
 * `revealVariants` (or any variant with a `hidden`/`visible` pair).
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/**
 * Default viewport config. The negative margin means the animation fires
 * slightly before the element is fully on screen, which removes the "pop"
 * feeling of elements that only animate once they are already visible.
 */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

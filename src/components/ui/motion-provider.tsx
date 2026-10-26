"use client";

import { LazyMotion, domAnimation } from "motion/react";

/**
 * Loads the animation features lazily so the full Framer Motion bundle is
 * not shipped to every visitor.
 *
 * Components must use the `m` proxy (`m.div` instead of `motion.div`) for
 * this to take effect — the `motion` shorthand always pulls in the full
 * feature set.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict={false}>
            {children}
        </LazyMotion>
    );
}

export default MotionProvider;

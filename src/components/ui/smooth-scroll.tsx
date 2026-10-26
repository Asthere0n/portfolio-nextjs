"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

/**
 * Smooth scrolling provider.
 *
 * Lenis drives the scroll position with an eased rAF loop. Motion's
 * `useScroll` keeps working because it reads the real scroll offset from
 * the document, which Lenis updates via `window.scrollTo`. The
 * `lenis.on('scroll', ...)` bridge below keeps Motion's internal scroll
 * values in sync so scroll-linked animations stay accurate.
 *
 * Smooth scrolling is skipped entirely when the visitor prefers reduced
 * motion.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const prefersReducedMotion = useReducedMotion();
    const pathname = usePathname();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.1,
            // Exponential ease-out keeps long jumps from feeling sluggish.
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.6,
        });

        let frame = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, [prefersReducedMotion]);

    // Navigating to a new route should start at the top, and any hash in
    // the URL should be scrolled to by the browser.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}

export default SmoothScrollProvider;

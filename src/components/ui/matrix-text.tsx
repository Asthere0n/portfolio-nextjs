"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
}

export const MatrixText = ({
    text = "HelloWorld!",
    className,
    initialDelay = 200,
    letterAnimationDuration = 500,
    letterInterval = 100,
}: MatrixTextProps) => {
    const [letters, setLetters] = useState<LetterState[]>(() =>
        text.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        }))
    );
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomChar = useCallback(
        () => (Math.random() > 0.5 ? "1" : "0"),
        []
    );

    const animateLetter = useCallback(
        (index: number) => {
            if (index >= text.length) return;

            requestAnimationFrame(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (!newLetters[index].isSpace) {
                        newLetters[index] = {
                            ...newLetters[index],
                            char: getRandomChar(),
                            isMatrix: true,
                        };
                    }
                    return newLetters;
                });

                setTimeout(() => {
                    setLetters((prev) => {
                        const newLetters = [...prev];
                        newLetters[index] = {
                            ...newLetters[index],
                            char: text[index],
                            isMatrix: false,
                        };
                        return newLetters;
                    });
                }, letterAnimationDuration);
            });
        },
        [getRandomChar, text, letterAnimationDuration]
    );

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        let currentIndex = 0;

        const animate = () => {
            if (currentIndex >= text.length) {
                setIsAnimating(false);
                return;
            }

            animateLetter(currentIndex);
            currentIndex++;
            setTimeout(animate, letterInterval);
        };

        animate();
    }, [animateLetter, text, isAnimating, letterInterval]);

    useEffect(() => {
        const timer = setTimeout(startAnimation, initialDelay);
        return () => clearTimeout(timer);
    }, []);

    // Restart animation every 5 seconds after it finishes
    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(() => {
                startAnimation();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, startAnimation]);

    const motionVariants = useMemo(
        () => ({
            matrix: {
                color: "#ffffff", 
                textShadow: "0 2px 4px rgba(250, 204, 21, 0.5)",
            },
        }),
        []
    );

    return (
        <div
            className={cn(
                "flex items-center justify-center text-yellow-400",
                className
            )}
            aria-label="Matrix text animation"
        >
            <div className="h-fit flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    {letters.map((letter, index) => (
                        <motion.div
                            key={`${index}-${letter.char}`}
                            className="text-5xl w-[1ch] text-center overflow-hidden"
                            initial="initial"
                            animate={letter.isMatrix ? "matrix" : "normal"}
                            variants={motionVariants}
                            transition={{
                                duration: 0.1,
                                ease: "easeInOut",
                            }}
                            style={{
                                display: "inline-block",
                                fontVariantNumeric: "tabular-nums",
                            }}
                        >
                            {letter.isSpace ? "\u00A0" : letter.char}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

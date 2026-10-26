"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, m } from "motion/react";
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    twitterUrl?: string;
    youtubeUrl?: string;
    linkedinUrl?: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    className?: string;
}

/**
 * Profile card carousel.
 *
 * Desktop shows an image beside a floating detail card; mobile stacks the
 * image above the text. Slides cross-fade with AnimatePresence and the
 * navigation sits underneath as a row of dots flanked by arrow buttons.
 */
export function TestimonialCarousel({
    testimonials,
    className,
}: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    if (!testimonials.length) return null;

    const handleNext = () =>
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const handlePrevious = () =>
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );

    const active = testimonials[activeIndex];

    const socialLinks = [
        { icon: Github, url: active.githubUrl, label: "GitHub" },
        { icon: Twitter, url: active.twitterUrl, label: "Twitter" },
        { icon: Youtube, url: active.youtubeUrl, label: "YouTube" },
        { icon: Linkedin, url: active.linkedinUrl, label: "LinkedIn" },
    ].filter((link) => !!link.url);

    const fade = prefersReducedMotion
        ? { initial: false as const, animate: undefined, exit: undefined }
        : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.4, ease: "easeInOut" as const },
          };

    return (
        <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
            {/* Desktop: image on the left, floating card overlapping it */}
            <div className="hidden md:flex relative items-center">
                <div className="w-[470px] h-[470px] rounded-3xl overflow-hidden bg-slate-800 flex-shrink-0">
                    <AnimatePresence mode="wait">
                        <m.div
                            key={active.imageUrl}
                            {...fade}
                            className="w-full h-full"
                        >
                            <Image
                                src={active.imageUrl}
                                alt={active.name}
                                width={470}
                                height={470}
                                className="w-full h-full object-cover"
                                draggable={false}
                                priority
                            />
                        </m.div>
                    </AnimatePresence>
                </div>

                <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1 border border-slate-700">
                    <AnimatePresence mode="wait">
                        <m.div
                            key={active.name}
                            {...fade}
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {active.name}
                                </h2>
                                <p className="text-sm font-medium text-slate-400">
                                    {active.title}
                                </p>
                            </div>

                            <p className="text-slate-100 text-base leading-relaxed mb-8">
                                {active.description}
                            </p>

                            {socialLinks.length > 0 && (
                                <div className="flex space-x-4">
                                    {socialLinks.map(({ icon: Icon, url, label }) => (
                                        <a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center transition-colors hover:bg-slate-700 hover:scale-105 cursor-pointer"
                                            aria-label={label}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </m.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile: stacked layout */}
            <div className="md:hidden max-w-sm mx-auto text-center">
                <div className="w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden mb-6">
                    <AnimatePresence mode="wait">
                        <m.div
                            key={active.imageUrl}
                            {...fade}
                            className="w-full h-full"
                        >
                            <Image
                                src={active.imageUrl}
                                alt={active.name}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                                draggable={false}
                                priority
                            />
                        </m.div>
                    </AnimatePresence>
                </div>

                <div className="px-4">
                    <AnimatePresence mode="wait">
                        <m.div key={active.name} {...fade}>
                            <h2 className="text-xl font-bold text-white mb-2">
                                {active.name}
                            </h2>
                            <p className="text-sm font-medium text-slate-400 mb-4">
                                {active.title}
                            </p>
                            <p className="text-slate-100 text-sm leading-relaxed mb-6">
                                {active.description}
                            </p>

                            {socialLinks.length > 0 && (
                                <div className="flex justify-center space-x-4">
                                    {socialLinks.map(({ icon: Icon, url, label }) => (
                                        <a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center transition-colors hover:bg-slate-700 cursor-pointer"
                                            aria-label={label}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </m.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous slide"
                    className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 shadow-md flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                >
                    <ChevronLeft className="w-6 h-6 text-slate-200" />
                </button>

                <div className="flex gap-2">
                    {testimonials.map((testimonial, index) => (
                        <button
                            type="button"
                            key={testimonial.name}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                                index === activeIndex
                                    ? "bg-yellow-400"
                                    : "bg-slate-600 hover:bg-slate-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === activeIndex}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 shadow-md flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
                >
                    <ChevronRight className="w-6 h-6 text-slate-200" />
                </button>
            </div>
        </div>
    );
}

export default TestimonialCarousel;

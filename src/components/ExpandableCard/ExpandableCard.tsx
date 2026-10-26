"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import CardData from "./cards/CardData";
import TechPills from "./TechPills/TechPills";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof CardData)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <m.div
      className="min-h-screen w-fit"
      initial={prefersReducedMotion ? false : { opacity: 0, x: -100 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }}>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <m.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </m.button>
            <m.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full md:max-w-[90%] max-h-screen flex flex-col bg-slate-600 sm:rounded-3xl overflow-y-scroll"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <m.div layoutId={`image-${active.title}-${id}`} className="w-full h-60 md:h-120">
                <img
                  width={300}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 md:h-120 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </m.div>

              <div>
                <div className="flex flex-col justify-between items-start p-4">
                  <div className="flex justify-between w-full">
                    <m.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-yellow-400 text-4xl mb-2"
                    >
                      {active.title}
                    </m.h3>
                    <m.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className={`px-4 py-3 text-sm rounded-full font-bold text-white ${active.ctaStyle}`}
                    >
                      {active.ctaText}
                    </m.a>
                    </div>
                    <m.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-slate-200 text-xl font-bold my-6"
                    >
                      {active.description}
                    </m.p>
                    <TechPills title={`active-${active.title}`} pills={active.stack} />
                    <div className="flex items-center gap-2">
                    </div>
                    
                </div>
                <div className="pt-4 relative px-4">
                  <m.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="text-slate-200 text-xs md:text-sm lg:text-base h-40 h-fit pb-10 flex flex-col items-start gap-4 overflow-auto"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    <style>
                      {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                  `}
                    </style>
                    <div className="hide-scrollbar w-full h-full">
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </div>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[90%] mx-auto mb-16 w-full flex flex-col items-start gap-10">
        {CardData.map((card, index) => (
          <m.div
            layoutId={`card-${card.title}-${id}`}
            key={index + card.title}
            onClick={() => setActive(card)}
            className="p-6 w-full flex flex-col bg-slate-800 shadow-xl hover:shadow-2xl hover:bg-slate-600 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col items-center md:flex-row h-full w-full">
              <m.div layoutId={`image-${card.title}-${id}`} className="w-full md:w-[300px] h-[300px] rounded-lg">
                <img
                  width={300}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="w-full md:w-[300px] h-[300px] rounded-xl object-cover"
                />
              </m.div>
              <div className="w-[90%] flex justify-center items-start flex-grow-1 flex-col gap-8">
                <m.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-yellow-400 text-center lg:text-left text-3xl"
                >
                  {card.title}
                </m.h3>
                <m.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white w-[90%] text-left text-xl font-semibold"
                >
                  {card.description}
                </m.p>
                <m.div layoutId={`pills-${card.title}-${id}`}>
                  <TechPills pills={card.stack} title={card.title} />
                </m.div>
              </div>
            </div>
          </m.div>
        ))}
      </ul>
    </m.div>
  );
}

export const CloseIcon = () => {
  return (
    <m.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </m.svg>
  );
};



"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import cards from "./cards/cards";
import TechPills from "./TechPills/TechPills";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

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
    <motion.div
    className="min-h-screen w-fit"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
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
            <motion.button
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
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[900px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-slate-600 sm:rounded-3xl overflow-y-scroll overflow-x-hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
              <img
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
              />
              </motion.div>

              <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-medium text-yellow-400 text-base"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-slate-200 text-base font-bold"
                >
                  {active.description}
                </motion.p>
                </div>

                <motion.a
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href={active.ctaLink}
                target="_blank"
                className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="text-slate-200 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                >
                {/* Hide scrollbar for Webkit browsers */}
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
                </motion.div>
              </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[90%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col bg-slate-800 shadow-xl hover:shadow-2xl hover:bg-slate-600 rounded-xl cursor-pointer h-108"
          >
            <div className="flex gap-4 flex-col lg:flex-row h-full w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="aspect-square h-60 w-full lg:h-full rounded-lg object-cover object-top"
                  style={{ aspectRatio: "1 / 1" }}
                />
                </motion.div>
              <div className="flex justify-center items-start flex-col gap-8">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-yellow-400 text-center lg:text-left text-2xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
                <motion.div layoutId={`pills-${card.title}-${id}`}>
                  <TechPills pills={card.stack} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
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
    </motion.svg>
  );
};



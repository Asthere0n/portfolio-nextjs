"use client"
import { Tabs } from "@/components/ui/vercel-tabs"
import { AnimatePresence, motion, useReducedMotion, m } from "motion/react"
import { useState } from "react"
import {Work} from "../Work/Work"
import { ExpandableCard } from "../ExpandableCard/ExpandableCard"
import { EASE_OUT_EXPO } from "../ui/motion-config"

const tabs = [
  { id: "Work", label: "Work" },
  { id: "Projects", label: "Projects" },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Projects")
  const prefersReducedMotion = useReducedMotion()
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden w-[100dvw] lg:w-[80%] py-8 lg:p-8 transition-all duration-1000 border-y-4 border-slate-600 bg-slate-700 lg:rounded-3xl mt-16">
      <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(tabId) => setActiveTab(tabId)}
      className="mb-8"
      />
      <div className="flex justify-center items-center w-full transition-all duration-500 mt-4 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <m.div
        key={activeTab}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
        transition={prefersReducedMotion ? undefined : { duration: 0.3, ease: EASE_OUT_EXPO }}
        className="flex justify-center items-center w-full"
        >
        {activeTab === "Projects" ? <ExpandableCard /> : <Work/>}
        </m.div>
      </AnimatePresence>
      </div>
    </div>
  )
}

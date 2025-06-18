"use client"
import { Tabs } from "@/components/ui/vercel-tabs"
import { useState } from "react"
import {Work} from "../Work/Work"
import { ExpandableCard } from "../ExpandableCard/ExpandableCard"

const tabs = [
  { id: "Projects", label: "Projects" },
  { id: "Work", label: "Work" },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Projects")
  return (
    <div className="flex flex-col items-center justify-center w-[80%] p-12 transition-all duration-1000 border-4 border-slate-600 bg-slate-700 rounded-3xl">
      <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(tabId) => setActiveTab(tabId)}
      className="mb-8"
      />
      <div className="flex justify-center items-center w-fit transition-all duration-500">
      {activeTab === "Projects" ? <ExpandableCard /> : <Work/>}
      </div>
    </div>
  )
}
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
    <div className="flex flex-col items-center w-full min-h-screen">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId)}
        className="mb-8"
      />
      <div className="flex justify-center items-center w-[90%]">
        {activeTab === "Projects" ? <ExpandableCard /> : <Work/>}
      </div>
    </div>
  )
}
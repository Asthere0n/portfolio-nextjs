import Image from "next/image";
import {motion} from "motion/react"
import React from "react";
import { Timeline } from "../ui/timeline";
import WorkCard from "./WorkCard/WorkCard";
import { title } from "process";
import { Content } from "next/font/google";
import Moving from "./Moving/Moving";

export function Work() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-col">
          <WorkCard
            title="Supervisor"
            company="Costa Coffee"
            dates="Feb-25 ~ Jun-25"
            location="Stirling, UK"
            description="At Costa Coffee I led daily operations while applying my growing web development skills to real business problems. I built tools like the Task Manager and Day-Dot Maker to improve team efficiency and reduce errors. This role sharpened both my leadership and my ability to deliver practical software solutions in real work environments."
            src="/img/costa-coffee.jpg"
            responsabilities={["Designed custom web tools to improve store processes", "Supervised daily store operations and team performance", "Delivered customer service and handled conflict resolution"]}
          />
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <WorkCard
            title="Sales Assistant"
            src="/img/ellies.jpeg"
            company="Ellie's cellar"
            dates="April-24 ~ Feb-25"
            location="Alva, UK"
            responsabilities={["Managed daily operations independently while working solo shifts", "Handled inventory checks and organized deliveries for multiple branches", "Completed end-of-day banking and shop closing procedures"]}
            description="At Ellie’s Cellar I balanced a part-time customer service while starting my journey into full-stack development. I worked independently, assisting customers, managing deliveries, handling banking, and overseeing daily operations alone."
          />

          <Moving origin="England" destination="Scotland" />

        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <WorkCard
            title="Senior Bar Manager (SWAT)"
            src="/img/joe.png"
            location="London, UK"
            company="Joe & the Juice"
            dates="Sept-21 ~ Feb-24"
            responsabilities={[ "Managed teams of 40 staff with focus on training and performance","Became Store Manager in 3 months", "Selected for SWAT Team handling store openings & recovery projects", "Collaborated with Head office and area managers on high-priority assignments"]}
            description="At Joe & The Juice I advanced quickly from team Member to store manager in 3 months, leading a 40-person team at Victoria. After two years I joined the SWAT Team, handling store launches, manager training, and turnaround projects across multiple locations. This role sharpened my leadership, training, problem-solving, and cross-team collaboration."
          />
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <WorkCard
            title="Barista"
            src="/img/pret.png"
            location="London, UK"
            company="Pret A Manger"
            dates="April-18 ~ March-21"
            responsabilities={["Built and maintained a strong local network with nearby store teams", "Optimized workflow and procedures in high-volume high-preassure environments", "Operated under high-pressure conditions in one of the UK’s busiest shops"]}
            description="At Pret A Manger I managed daily barista duties while also coordinating supply logistics between shops around King’s Cross. I built a strong network with nearby teams to ensure smooth operations. Working in one of the UK’s busiest locations taught me to optimize workflows, stay calm under pressure, and adapt quickly."
          />
          <Moving origin="Spain" destination="England" />
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="flex flex-col">
          <WorkCard
            title="Electronic Maintenance Technician"
            src="/img/Lerche.jpg"
            location="Valencia, Spain"
            company="Grupo Lerche"
            dates="Sept-17 ~ April-18"
            responsabilities={["Conducted quality control inspections on LED display panels", "Performed diagnostic testing to identify hardware defects", "Documented technical reports for repair teams"]}
            description="At Grupo Lerche I installed and maintained LED advertising screens for football stadiums, including Arsenal and Real Madrid. I specialized in quality control, using diagnostic tests to detect hardware defects, documenting issues, and ensuring all units met strict quality standards before shipment. This role strengthened my attention to detail, problem-solving, and technical troubleshooting."
          />
        </div>
      )
    },
  ];
  return (
    <motion.div
      className="min-h-screen w-full"
      initial={{ opacity: 0, x:100 }}
      animate={{ opacity: 1, x:0 }}
    transition={{duration:0.3, ease: "easeOut"}}>
        <div className="top-0 left-0 w-full">
          <Timeline data={data} />
        </div>
    </motion.div>
  );
}

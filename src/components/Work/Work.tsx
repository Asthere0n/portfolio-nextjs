import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function Work() {
    const data = [
  {
      title: "2025",
      content: (
          <div>
              <p>Work experience in 2025</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
          <div>
              <p>Work experience in 2025</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
          <div>
              <p>Work experience in 2025</p>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

import React from 'react'

export default function DayDot() {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p>Status <span className='p-2 bg-green-400 rounded-xl'>Deployed</span></p>
            <p>React • CSS • Vercel</p>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Description</p>
            <p>In hospitality, perishable products often require individual DayDot stickers with varying shelf lives. Staff frequently struggle to calculate correct expiry dates across different products, leading to potential waste, mistakes, or health risks. I built DayDot to simplify and automate these calculations, improving accuracy and efficiency.</p>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Key Features</p>
            <ul>
                <li>Simple, intuitive UI for staff with no technical background</li>
                <li>Customizable and easily expandable product shelf-life database</li>
                <li>Dynamic date calculations based on shelf-life rules</li>
                <li>Mobile-friendly responsive design, with a mobile-first approach</li>
                <li>Fully client-side app — no backend required</li>
                <li>Fast deployment via Vercel hosting</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ul>
                <li>Challenge 1: Designing a user interface that could be quickly and easily used by busy staff with minimal training.
                    Solution: Focused on minimal clicks, large buttons, and clear visual hierarchy using Tailwind CSS for rapid and accessible UI design.</li>
                <li>Challenge 2: Implementing reliable date calculations to handle different shelf lives correctly.
                    Solution: Utilized JavaScript’s built-in Date API with added validation logic to prevent user errors.</li>
                <li>Challenge 3: Deploying a fully serverless solution to minimize costs and maintenance.
                    Solution: Built a fully client-side React app with no backend dependencies, deployed seamlessly via Vercel.</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul>
                <li>Improved my ability to scope small, highly-focused tools that solve real-world business problems</li>
                <li>Strengthened my skills in state management, form handling, and data validation in React</li>
                <li>Gained hands-on experience designing UI for non-technical end users</li>
                <li>Practiced fully serverless deployments and hosting through Vercel</li>
            </ul>
        </div>
    )
}

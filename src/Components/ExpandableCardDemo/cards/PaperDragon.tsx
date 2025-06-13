import React from 'react'

export default function PaperDragon() {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p>Status <span className='p-2 bg-yellow-400 rounded-xl text-black'>In Progress</span></p>
            <p>Next.js • MongoDB • ShadCN • React </p>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Description</p>
            <p>Building and managing Dungeons & Dragons characters often involves scattered tools, manual tracking, and disorganized character sheets. Paper Dragon aims to centralize character creation, customization, and storage while providing a beautiful, comic-style interface and long-term extensibility.</p>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Key Features</p>
            <ul>
                <li>Full user authentication via Clerk for secure profiles</li>
                <li>MongoDB database integration to persist and manage character data</li>
                <li>Creative Commons SRD 5.1 integration for rules, abilities, classes, spells, and other D&D data</li>
                <li>Comic-inspired visual design using ShadCN components and custom styling</li>
                <li>Character Sheet builder with real-time data validation</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ul>
                <li>Challenge 1: Scaling up to a much larger, more complex project than previous personal builds.
Solution: Carefully planning project architecture, breaking down features into smaller milestones, and continuously refactoring code for maintainability.</li>
                <li>Challenge 2: Handling dynamic data structures for complex character data while preserving flexibility.
Solution: Designing robust MongoDB schemas that can adapt to different classes, abilities, and customization options.</li>
                <li>Challenge 3: Balancing creative design vision with functional UI/UX best practices.
Solution: Leveraging ShadCN’s component library for consistency while adding custom comic-style visual elements for personality.</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul>
                <li>Gained practical experience in full-stack architecture with Next.js and MongoDB</li>
                <li>Strengthened API design, dynamic routing, and backend/frontend data synchronization</li>
                <li>Integrated complex third-party services (Clerk authentication, SRD data parsing)</li>
                <li>Learned to plan long-term feature roadmaps for scalable projects</li>
                <li>Improved version control practices on Git for managing larger codebases</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Future plans</p>
            <ul>
                <li>Marketplace for user-generated homebrew content</li>
                <li>AI-powered tools to assist with inspiration for character background/story creation.</li>
            </ul>
        </div>
    )
}

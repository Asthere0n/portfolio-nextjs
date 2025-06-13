import React from 'react'

export default function TaskTracker() {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p>Status <span className='p-2 bg-green-400 rounded-xl'>Deployed</span></p>
            <p>JavaScript • Node.js • Express • MongoDB • Mongoose • CSS</p>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Description</p>
            <p>At my workplace, we struggled to track which tasks were completed, who completed them, and when. To both solve this issue and apply my growing backend skills from The Odin Project curriculum, I decided to build a task management app that allowed full task tracking, team accountability, and provided me hands-on experience with real-world backend development.</p>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Key Features</p>
            <ul>
                <li>Neo-brutalist custom design from scratch (CSS)</li>
                <li>Fully responsive for desktop and mobile screens</li>
                <li>RESTful API built with Express and Node.js</li>
                <li>Full CRUD functionality: Create, Read, Update, Delete tasks</li>
                <li>Mongoose schema design for task data management</li>
                <li>Server-Side Rendering (SSR)</li>
                <li>MVC (Model-View-Controller) design pattern implementation</li>
                <li>Deployed on Railway.App</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ul>
                <li>Challenge 1: Structuring a scalable backend architecture as the app complexity grew.
                    Solution: Adopted the MVC pattern early, which made the codebase cleaner, modular, and easier to debug.</li>
                <li>Challenge 2: Adapting the neo-brutalist UI to be fully responsive across devices.
                    Solution: Applied CSS media queries and flexible layouts, ensuring a smooth experience on both mobile and desktop.</li>
                <li>Challenge 3: Handling deployment on a cloud platform for the first time.
                    Solution: Researched and deployed the project on Railway.App, learning cloud hosting, environment variables, and remote database connections.</li>
            </ul>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul>
                <li>Gained practical experience in HTTP communication, client-server interaction, and API route handling.</li>
                <li>Learned how to structure a full CRUD application with persistent data storage.</li>
                <li>First exposure to the MVC pattern, which built a strong foundation for later understanding component-based frameworks like React.</li>
                <li>Improved my skills in responsive design and browser rendering behaviors.</li>
            </ul>
        </div>
    )
}

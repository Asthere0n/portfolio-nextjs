import React from 'react'

export default function EKnightMa() {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p>Status <span className='p-2 bg-green-400 rounded-xl'>Deployed</span></p>
            <p>JavaScript • HTML • CSS</p>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Description</p>
            <p>I wanted to challenge myself by building a game that not only tested user reflexes but also included a logical problem-solving element. The idea was to leverage chess mechanics—specifically the Knight’s unique movement—to create a puzzle game that forces players to think strategically under time pressure.</p>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Key Features</p>
            <ul>
                <li>Fully interactive chessboard grid rendered dynamically with JavaScript</li>
                <li>Timer countdown adds pressure to decision-making</li>
                <li>Pathfinding algorithm calculates required moves for each challenge</li>
                <li>Difficulty scaling with increasingly complex board targets</li>
                <li>Fully responsive and playable across devices</li>
                <li>Pure HTML, CSS, and Vanilla JavaScript — no external frameworks. Every line of code was written by me.</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ul>
                <li>Challenge 1: Implementing the Knight’s pathfinding algorithm to determine the optimal route and move count.
                    Solution: Designed and implemented a simplified version of the Breadth-First Search (BFS) algorithm to calculate the shortest path efficiently for the Knight’s L-shaped moves.</li>
                <li>Challenge 2: Ensuring the game was fully functional and visually consistent across different browsers and screen sizes.
                    Solution: Applied responsive design principles and rigorously tested cross-browser compatibility.</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul>
                <li>Gained hands-on experience with algorithm design, specifically BFS for game logic.</li>
                <li>Improved problem decomposition skills by breaking complex movements into simple programmable rules.</li>
                <li>Strengthened DOM manipulation and event-handling techniques in Vanilla JavaScript.</li>
                <li>Learned how to balance performance and complexity in browser-based games.</li>
            </ul>
        </div>
    )
}

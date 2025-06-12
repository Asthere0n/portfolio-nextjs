import React from 'react'
import MERNLetter from './MERNLetter/MERNLetter'
import MongoDB from './MERNLetter/Logos/MongoDB'
import Expressjs from './MERNLetter/Logos/Expressjs'
import ReactJS from './MERNLetter/Logos/ReactJS'
import Nodejs from './MERNLetter/Logos/Nodejs'
import JavaScript from './MERNLetter/Logos/JavaScript'
import TailwindCSS from './MERNLetter/Logos/TailwindCSS'
import Nextjs from './MERNLetter/Logos/Nextjs'
import GitHub from '../ContactLinks/SVG/GitHub'
import PostgreSQL from './MERNLetter/Logos/PostgreSQL'
import MySQL from './MERNLetter/Logos/MySQL'
import HTML from './MERNLetter/Logos/HTML'
import CSS from './MERNLetter/Logos/CSS'
import Miro from './MERNLetter/Logos/Miro'

export default function Stack() {
    return (
        <div className='w-full min-h-[100dvh] flex justify-around items-start px-28'>
            <div className='m-8 flex-1'>
                <h2 className='text-5xl mb-4'>But what's <span className='text-yellow-400'>MERN</span>?</h2>
                <p className='text-2xl text-slate-400 w-1/2'>Mern is a set of tools that allow us to build complete application from top to bottom without ever leaving JavaScript.</p>
                <MERNLetter name='MongoDB' delay={0} icon={<MongoDB />} color='green' subtitle='NoSQL Database' />
                <MERNLetter name='Express' delay={10} icon={<Expressjs />} color='yellow' subtitle='Back end Framework to build RESTful APIs' />
                <MERNLetter name='React' delay={10} color='cyan' icon={<ReactJS />} subtitle='Front end Framework to build user interfaces' />
                <MERNLetter name='NodeJs' delay={30} color='lime' icon={<Nodejs />} subtitle='JavaScript Runtime environment' />
                <div className='bg-cyan-400 text-cyan-400 bg-lime-400 text-lime-400 bg-green-400 text-green-400'></div>
            </div>
            <div className='m-8'>
                <h3 className='text-3xl mb-4'>Other <span>Technologies</span></h3>
                <ul  className='grid grid-cols-3'>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-yellow-400 text-black '><JavaScript/> JavaScript</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-cyan-700 text-white'><TailwindCSS/> Tailwind</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-black'><Nextjs/> NextJS</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-gray-900'><GitHub/> GitHub</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-blue-600 text-white'><PostgreSQL/> PostgreSQL</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-cyan-600 text-white'><MySQL/> MySQL</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-amber-500'><HTML/> HTML</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-violet-600'><CSS/> CSS</li>
                    <li className='font-bold h-32 w-32 text-sm flex flex-col justify-around items-center p-4 bg-yellow-400 text-black'><Miro/> Miro</li>
                </ul>
            </div>
        </div>
    )
}

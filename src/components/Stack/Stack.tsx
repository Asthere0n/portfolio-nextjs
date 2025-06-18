import React from 'react'
import MERNLetter from './MERNLetter/MERNLetter'
import MongoDB from '../../../public/icons/MongoDB'
import Expressjs from '../../../public/icons/Expressjs'
import ReactJS from '../../../public/icons/ReactJS'
import Nodejs from '../../../public/icons/Nodejs'
import JavaScript from '../../../public/icons/JavaScript'
import TailwindCSS from '../../../public/icons/TailwindCSS'
import Nextjs from '../../../public/icons/Nextjs'
import GitHub from '../ContactLinks/SVG/GitHub'
import PostgreSQL from '../../../public/icons/PostgreSQL'
import MySQL from '../../../public/icons/MySQL'
import HTML from '../../../public/icons/HTML'
import CSS from '../../../public/icons/CSS'
import Miro from '../../../public/icons/Miro'

export default function Stack() {
    return (
        <div className='w-full min-h-[100dvh] flex flex-col lg:flex-row justify-center items-start px-28'>
            <div className='m-8 w-[60%]'>
                <h2 className='text-5xl'>But what's <span className='text-yellow-400'>MERN</span>?</h2>
                <p className='text-2xl text-slate-400 w-[45ch] my-5 text-justify'>MERN is the set of tools of my choice that allow me to build complete application from top to bottom without ever leaving JavaScript.</p>
                <MERNLetter name='MongoDB' delay={0} icon={<MongoDB />} color='green' subtitle='NoSQL Database' />
                <MERNLetter name='Express' delay={10} icon={<Expressjs />} color='yellow' subtitle='Back end Framework to build RESTful APIs' />
                <MERNLetter name='React' delay={10} color='cyan' icon={<ReactJS />} subtitle='Front end Framework to build user interfaces' />
                <MERNLetter name='NodeJs' delay={30} color='lime' icon={<Nodejs />} subtitle='JavaScript Runtime environment' />
                <div className='bg-cyan-400 text-cyan-400 bg-lime-400 text-lime-400 bg-green-400 text-green-400'></div>
            </div>
            <div className='m-8'>
                <h3 className='text-3xl mb-8'>Other <span className='text-yellow-400'>Technologies</span> I use</h3>
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

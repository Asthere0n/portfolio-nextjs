import React from 'react'

// Components
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
        <div className='w-full min-h-[100dvh] flex flex-col justify-center'>
            <div className=' flex flex-col items-start lg:flex-row justify-center lg:items-center lg:items-start lg:px-28 pt-16'>

                <div className='md:m-8 w-[90%] lg:w-[60%] '>
                    <h2 className='text-3xl md:text-5xl text-slate-200 ml-4'>But what's <span className='text-yellow-400'>MERN</span>?</h2>
                    <p className='text-2xl text-slate-400 w-full md:w-[45ch] ml-4 my-5 text-justify'>MERN is the set of tools of my choice that allow me to build complete application from top to bottom without ever leaving JavaScript.</p>
                    <MERNLetter name='MongoDB' delay={0} icon={<MongoDB />} color='green' subtitle='NoSQL Database' />
                    <MERNLetter name='Express' delay={10} icon={<Expressjs />} color='yellow' subtitle='Back end Framework to build RESTful APIs' />
                    <MERNLetter name='React' delay={10} color='cyan' icon={<ReactJS />} subtitle='Front end Framework to build user interfaces' />
                    <MERNLetter name='NodeJs' delay={30} color='lime' icon={<Nodejs />} subtitle='JavaScript Runtime environment' />
                    <div className='bg-cyan-400 text-cyan-400 bg-lime-400 text-lime-400 bg-green-400 text-green-400'></div>
                </div>
                <div className='flex flex-col my-8 w-full lg:m-8 items-center'>
                    <h3 className='text-2xl md:text-4xl w-full ml-8 mb-8 text-slate-200'>Other <span className='text-yellow-400'>Technologies</span></h3>
                    <ul className='grid grid-cols-3 w-fit justify-center items-center'>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-yellow-400 text-black '><JavaScript /> JavaScript</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-cyan-700 text-white'><TailwindCSS /> Tailwind</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-black'><Nextjs /> NextJS</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-gray-900'><GitHub /> GitHub</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-blue-600 text-white'><PostgreSQL /> PostgreSQL</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-cyan-600 text-white'><MySQL /> MySQL</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-amber-500'><HTML /> HTML</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-violet-600'><CSS /> CSS</li>
                        <li className='font-bold h-24 w-24 md:h-32 md:w-32 text-sm flex flex-col justify-around items-center p-4 bg-yellow-400 text-black'><Miro /> Miro</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

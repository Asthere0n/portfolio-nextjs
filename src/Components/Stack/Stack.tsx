import React from 'react'
import MERNLetter from './MERNLetter/MERNLetter'
import MongoDB from './MERNLetter/Logos/MongoDB'
import Expressjs from './MERNLetter/Logos/Expressjs'
import ReactJS from './MERNLetter/Logos/ReactJS'
import Nodejs from './MERNLetter/Logos/Nodejs'

export default function Stack() {
    return (
        <div className='w-full min-h-[100dvh] flex justify-around items-center '>
            <div className='m-8 flex-1'>
                <h2 className='text-5xl mb-4'>But what's <span className='text-yellow-400'>MERN</span>?</h2>
                <p className='text-2xl text-slate-400'>Mern is a set of tools that allow us to build complete application from top to bottom without ever leaving JavaScript.</p>
                <MERNLetter name='MongoDB' delay={0} icon={<MongoDB />} color='green' subtitle='NoSQL Database' />
                <MERNLetter name='Express' delay={10} icon={<Expressjs />} color='yellow' subtitle='Back end Framework to build RESTful APIs' />
                <MERNLetter name='React' delay={10} color='cyan' icon={<ReactJS />} subtitle='Front end Framework to build user interfaces' />
                <MERNLetter name='NodeJs' delay={30} color='lime' icon={<Nodejs/>} subtitle='JavaScript Runtime environment' />
            </div>
            <div className='m-8'>
                <h3>Other <span>Technologies</span> I work with</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                    <li>NextJS</li>
                    <li>GitHub</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Miro</li>
                </ul>
            </div>
        </div>
    )
}

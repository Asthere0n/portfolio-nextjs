import React from 'react'
import GitHub from './SVG/GitHub'
import  Link  from 'next/link'
import LinkedIn from './SVG/LinkedIn'
import DownloadCV from './SVG/DownloadCV'
import Location from './SVG/Location'
import ContactButton from './ContactButton/ContactButton'


export default function ContactLinks() {
    return (
        <div className='w-fit flex justify-center items-center'>
            <ContactButton name='GitHub' link='https://github.com/Asthere0n' icon={<GitHub/>}/>
            <ContactButton name='LinkedIn' icon={<LinkedIn/>} link='https://www.linkedin.com/in/cristian-sanchez-c/'/>
            <ContactButton name='CV' icon={<DownloadCV />} link='#' />
            <ContactButton name='Stirling' icon={<Location/>} link='https://maps.app.goo.gl/PzEiWN2L5JcAU6KX9'/>
        </div>
    )
}

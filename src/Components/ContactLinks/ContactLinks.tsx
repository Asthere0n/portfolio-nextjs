import React from 'react'
import GitHub from './GitHub'
import  Link  from 'next/link'
import LinkedIn from './LinkedIn'
import DownloadCV from './DownloadCV'
import Location from './Location'


export default function ContactLinks() {
    return (
        <div className='w-full flex justify-around items-center'>
            <Link href='https://github.com/Asthere0n'
                className='border-4 border-white rounded-2xl p-3 h-24 w-32 flex flex-col justify-between items-center'>
                    <GitHub/><p className='text-xl'>GitHub</p>
                </Link>
            <Link href='https://github.com/Asthere0n'
                className='border-4 border-white rounded-2xl p-3 h-24 w-32 flex flex-col justify-between items-center'>
                    <LinkedIn/><p className='text-xl'>LinkedIn</p>
                </Link>
            <Link href='https://github.com/Asthere0n'
                className='border-4 border-white rounded-2xl p-3 h-24 w-32 flex flex-col justify-between items-center'>
                    <DownloadCV/><p className='text-xl'>CV</p>
                </Link>
            <Link href='https://github.com/Asthere0n'
                className='border-4 border-white rounded-2xl p-3 h-24 w-32 flex flex-col justify-between items-center'>
                    <Location/><p className='text-xl'>Stirling</p>
                </Link>
        </div>
    )
}

import React from 'react'
import Link from 'next/link'

export interface Props {
    link: string,
    name: string,
    icon: any
}

export default function ContactButton(props: Props) {
    return (
        <>
            <Link href={props.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group border-4 border-slate-200 rounded-2xl p-1 sm:p-3 h-24 w-28 sm:w-32 flex flex-col justify-center items-center overflow-hidden m-2 sm:m-4 hover:border-yellow-400 hover:text-yellow-400 hover:bg-slate-900 hover:shadow-2xl active:shadow-2xl shadow-amber-600 transition-all duration-300'>
                <span className='translate-y-3 group-hover:translate-y-0 transition-all duration-200'>{props.icon}</span>
                <p
                    className='text-xl font-bold transform translate-y-12 group-hover:translate-y-0 transition-all duration-300'
                >
                    {props.name}
                </p>
            </Link>
        </>
    )
}

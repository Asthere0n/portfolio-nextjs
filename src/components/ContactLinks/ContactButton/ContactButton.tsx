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
                className='border-4 border-slate-200 rounded-2xl p-3 h-24 w-32 flex flex-col justify-between items-center m-4 hover:border-yellow-400 hover:text-yellow-400'>
                {props.icon}
                <p className='text-xl'>
                    {props.name}
                </p>
            </Link>
        </>
    )
}

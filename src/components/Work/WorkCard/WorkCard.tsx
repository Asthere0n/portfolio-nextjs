import React from 'react'
import Image from 'next/image'
import styles from './WorkCard.module.css'

export interface Props {
    title: string,
    company: string,
    dates: string,
    location: string,
    description: string,
    src: string,
    responsabilities: string[]
}

export default function WorkCard(props: Props) {
    return (
        <div>
            <div className={styles["flip-card"]}>
                <div className={styles["flip-card-inner"]}>
                    <div className={styles["flip-card-front"]}>
                        <div className='w-full h-full grid grid-cols-3 grid-rows-3 p-6 rounded-2xl border-2 justify-around items-start border-slate-400 bg-slate-800 overflow-hidden'>
                            <div className=' flex justify-start items-center gap-4 col-start-1 col-end-4' >
                                <Image src={props.src} alt='' width={40} height={40} className='rounded-sm'/>
                                <p className='text-2xl font-bold'>{props.title}</p>
                            </div>
                            <div className='row-start-2 row-end-4 flex flex-col justify-center items-start h-full'>
                                <p>{props.location}</p>
                                <p>{props.dates}</p>
                            </div>
                            <ul className='row-start-2 row-end-4 col-start-2 col-end-4 flex flex-col h-full gap-1 px-8 border-l-2 border-slate-600 justify-center items-start'>
                                {props.responsabilities.map((resp, idx) => (
                                    <li key={"id"+idx} className='list-disc text-left'>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles["flip-card-back"]}>
                        <div className='w-full h-full flex rounded-2xl border-2 border-white overflow-hidden p-4 px-8'>
                            <p className='text-left flex h-full items-center'>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

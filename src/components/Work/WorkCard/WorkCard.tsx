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
}

export default function WorkCard(props: Props) {
    return (
        <div>
            <div className={styles["flip-card"]}>
                <div className={styles["flip-card-inner"]}>
                    <div className={styles["flip-card-front"]}>
                        <div className='flex rounded-2xl border-2 border-white overflow-hidden'>
                            <Image src={props.src} alt='' width={300} height={300} />
                            <div className='p-4 flex flex-col justify-center items-start gap-2'>
                                <p className='text-2xl font-bold'>{props.title}</p>
                                <p>{props.location}</p>
                                <p>{props.dates}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["flip-card-back"]}>
                        <div className='w-full h-full flex rounded-2xl border-2 border-white overflow-hidden p-4'>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

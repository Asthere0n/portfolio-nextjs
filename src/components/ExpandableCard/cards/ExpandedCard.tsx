import React from 'react'

interface Props {
    title: string,
    description: string,
    keyFeatures: string[],
    challenges: string[],
    takeaways: string[]
}

export default function ExpandedCard(props: Props) {
    return (
        <div key={`expanded-${props.title}`} className="flex flex-col gap-2 py-2">
            <p className='font-extrabold text-2xl my-2 w-full bg-slate-800 px-2'>Description</p>
            <p className='text-xl'>{ props.description }</p>

            <p className='font-extrabold my-2 text-2xl w-full bg-slate-800 px-2'>Key Features</p>
            <ul className='list-disc pl-5'>
                {props.keyFeatures.map((feature, index) => {
                    return <li className='text-xl my-2' key={`feature-${props.title}-${index}`}>{ feature }</li>
                }) }
            </ul>
            <p className='font-extrabold text-2xl my-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ol className='list-decimal pl-5'>
                {props.challenges.map((challenge, index) => {
                    return <li className='text-xl my-2' key={`challenge-${props.title}-${index}`}>{ challenge }</li>
                }) }
            </ol>
            <p className='font-extrabold text-2xl my-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul className='list-disc pl-5'>
                {props.takeaways.map((takeway, index) => {
                    return <li className='text-xl my-2' key={`takeway-${props.title}-${index}`}>{ takeway }</li>
                }) }
            </ul>
        </div>
    )
}

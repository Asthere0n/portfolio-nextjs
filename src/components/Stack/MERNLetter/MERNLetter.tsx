import React from 'react'

export interface Props {
  name: string,
  color: string,
  icon: any,
  delay: number,
  subtitle: string
}

export default function MERNLetter(props: Props) {
  const name = props.name
  const initial = name.slice(0, 1)
  const rest = name.slice(1)
  const color = props.color

  return (
    <div className='text-slate-200 flex items-center'>
      <div className={`border-4 border-slate-200 bg-${color}-400 text-5xl w-20 h-20 flex justify-center items-center p-4 rounded-full m-4`}>
      {props.icon}
      </div>
      <div>
      <h4 className='text-4xl text-slate-200'><span className={`text-4xl text-${color}-400`}>{initial}</span>{rest}</h4>
        <p className='text-xl text-slate-400'>{props.subtitle}</p>
      </div>
    </div>
  )
}

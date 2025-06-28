import React from 'react'

// Components
import HTML from '../../../../public/icons/HTML'
import CSS from '../../../../public/icons/CSS'
import JavaScript from '../../../../public/icons/JavaScript'
import ReactJS from '../../../../public/icons/ReactJS'
import TailwindCSS from '../../../../public/icons/TailwindCSS'
import TypeScript from '../../../../public/icons/TypeScript'
import Linux from '../../../../public/icons/Linux'
import Nodejs from '../../../../public/icons/Nodejs'
import MongoDB from '../../../../public/icons/MongoDB'
import Nextjs from '../../../../public/icons/Nextjs'

// Typing
interface Props {
    title: string,
    pills: string[]
}

// Mapping pill names to icon components
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    html: HTML,
    css: CSS,
    javascript: JavaScript,
    typescript: TypeScript,
    react: ReactJS,
    tailwind: TailwindCSS,
    linux: Linux,
    nodejs: Nodejs,
    mongodb: MongoDB,
    nextjs: Nextjs,
}

function technologyStyle(title: string) {
    // Styles
    switch (title) {
        case "html":
            return "bg-amber-500 text-white"
        
        case "css":
            return "bg-violet-600 text-white"
        
        case "javascript":
            return "bg-yellow-400 text-black"
        
        case "react":
            return "bg-cyan-300 text-black"
        
        case "nextjs":
            return "bg-black text-white"
        
        case "typescript":
            return "bg-blue-600 text-white"
        
        case "linux":
            return "bg-white text-black"
        
        case "nodejs":
            return "bg-lime-600 text-white" 
        
        case "mongodb":
            return "bg-green-400 text-white"
        
        case "tailwind":
            return "bg-cyan-400 text-white"
    }
} 

export default function TechPills(props: Props) {
    return (
        <div className='flex gap-2 flex-wrap' key={`group-pills-${props.title}`}>
            {props.pills.map((pill) => {
                // Pill
                const Icon = iconMap[pill]
                return Icon ? (
                    <div
                        key={`pill-${pill}`}
                        className={`group relative h-10 w-10 rounded-md ${technologyStyle(pill)} flex justify-center items-center overflow-hidden transition-[width] duration-400 ease-in hover:justify-start hover:w-48`}
                    >
                        <Icon key={`icon-${props.title}-${pill}`} className="h-8 w-8 m-2 flex-shrink-0" />
                        <p
                            className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:mx-4 transition-all duration-400 whitespace-nowrap overflow-hidden text-lg font-bold"
                            key={`label-${pill}`}
                        >
                            {pill.toUpperCase()}
                        </p>
                    </div>
                    
                ) : null
            })}
        </div>
    )
}

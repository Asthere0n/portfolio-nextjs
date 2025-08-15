import Link from 'next/link'
import React from 'react'

export default function EmploymentStatus() {
  return (
    <Link
      href='https://www.linkedin.com/in/cristian-sanchez-c/'
      className='group flex justify-around items-center pointer text-md sm:text-xl hover:text-shadow-2xs text-shadow-white text-green-400 p-3 border-4 border-green-400 rounded-lg hover:bg-green-400 hover:text-white hover:shadow-2xl shadow-green-600 font-bold transition-all duration-300'>
      <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" className='mr-3' xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
          className="fill-current text-green-400 group-hover:text-white transition-colors duration-300"
        />
      </svg>LOOKING FOR WORK
    </Link>
  )
}

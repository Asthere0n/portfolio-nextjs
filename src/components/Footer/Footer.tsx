import React from 'react'
import ContactLinks from '../ContactLinks/ContactLinks'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='w-full border-t-4 border-slate-800 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 text-slate-400'>
            <p className='text-sm'>
                © {year} Cristian Sanchez. Built with Next.js.
            </p>

            <ContactLinks />
        </footer>
    )
}

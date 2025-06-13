import React from 'react'

export default function Hyprland() {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p>Status <span className='p-2 bg-green-400 rounded-xl'>Active</span></p>
            <p>Linux • Shell • CSS</p>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Description</p>
            <p>Concerned about personal data privacy, data ownership, and the increasing influence of large service providers, I decided to take full control of my operating environment. Inspired by a video from PewDiePie and motivated by my growing awareness of data security risks—especially combined with AI advancements—I fully transitioned my entire OS and software suite to open-source, self-controlled alternatives.</p>

            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Key Features</p>
            <ul>
                <li>Full migration from proprietary systems to Arch Linux</li>
                <li>Customized dual-monitor workflow using custom shell scripts</li>
                <li>Hotkey-based keyboard layout switching via shell scripting</li>
                <li>Complete open-source software stack replacement (e.g., GIMP for image editing, Okular for PDF documents)</li>
                <li>Secure system configuration with minimal telemetry and improved data ownership</li>
                <li>Extensive use of Arch community documentation for troubleshooting, customization and optimization</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Challenges & Solutions</p>
            <ul>
                <li>Challenge 1: Identifying open-source alternatives for all proprietary software needs.
                    Solution: Researched, tested, and integrated tools like GIMP, LibreOffice, OBS, and open-source development tools into my daily workflow.</li>
                <li>Challenge 2: Critical installation error — accidentally deleted bootloader while partitioning disks during first Arch Linux installation.
                    Solution: Leveraged Arch Linux documentation, community forums, and extensive reading to recover the system, reinstall the bootloader, and complete installation.</li>
                <li>Challenge 3: High learning curve when customizing the system and integrating automation into daily tasks.
                    Solution: Developed custom shell scripts to automate workspace management (e.g., dynamic monitor layouts, keyboard remapping, window tiling), improving overall productivity and control.</li>
            </ul>
            <p className='font-extrabold mt-2 w-full bg-slate-800 px-2'>Learning Takeways</p>
            <ul>
                <li>Developed strong system administration and Linux troubleshooting skills</li>
                <li>Gained deep understanding of data storage, disk partitioning, bootloaders, and system recovery</li>
                <li>Strengthened personal understanding of data privacy, security principles, and ethical software use</li>
                <li>Improved problem-solving by using community-driven documentation and self-research</li>
            </ul>
        </div>
    )
}

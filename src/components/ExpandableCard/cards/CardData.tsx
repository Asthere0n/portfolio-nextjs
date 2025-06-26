import ExpandedCard from "./ExpandedCard";

const cards = [
    {
        description: "A web tool that simplifies expiry date calculations for perishable products",
        title: "DayDot",
        stack: ["html", "css", "javascript", "react"],
        src: "/img/Daydot.jpg",
        ctaText: "Visit",
        ctaLink: "https://day-dot.vercel.app/",
        ctaStyle: "bg-green-500",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="In hospitality, perishable products often require individual DayDot stickers with varying shelf lives. Staff frequently struggle to calculate correct expiry dates across different products, leading to potential waste, mistakes, or health risks. I built DayDot to simplify and automate these calculations, improving accuracy and efficiency."
                    keyFeatures={[
                        "Simple, intuitive UI for staff with no technical background",
                        "Customizable and easily expandable product shelf-life database",
                        "Dynamic date calculations based on shelf-life rules",
                        "Mobile-friendly responsive design, with a mobile-first approach",
                        "Fully client-side app — no backend required",
                        "Fast deployment via Vercel hosting"
                    ]}
                    challenges={[
                        "Challenge 1: Designing a user interface that could be quickly and easily used by busy staff with minimal training. /n Solution: Focused on minimal clicks, large buttons, and clear visual hierarchy using Tailwind CSS for rapid and accessible UI design.",
                        "Challenge 2: Implementing reliable date calculations to handle different shelf lives correctly. /n Solution: Utilized JavaScript’s built-in Date API with added validation logic to prevent user errors.",
                        "Challenge 3: Deploying a fully serverless solution to minimize costs and maintenance. /n Solution: Built a fully client-side React app with no backend dependencies, deployed seamlessly via Vercel."
                    ]}
                    takeaways={[
                        "Improved my ability to scope small, highly-focused tools that solve real-world business problems",
                        "Strengthened my skills in state management, form handling, and data validation in React",
                        "Gained hands-on experience designing UI for non-technical end users",
                        "Practiced fully serverless deployments and hosting through Vercel"
                    ]}
                />
            );
        },
    },
    {
        description: "Game based on the Knight in chess, against an AI using pathfinding algorythms",
        stack: ["html", "css", "javascript"],
        title: "E-Knight-ma",
        src: "/img/ChessKnight.webp",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        ctaStyle: "bg-green-500",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="I wanted to challenge myself by building a game that not only tested user reflexes but also included a logical problem-solving element. The idea was to leverage chess mechanics—specifically the Knight’s unique movement—to create a puzzle game that forces players to think strategically under time pressure."
                    keyFeatures={[
                        "Fully interactive chessboard grid rendered dynamically with JavaScript",
                        "Timer countdown adds pressure to decision-making",
                        "Pathfinding algorithm calculates required moves for each challenge",
                        "Difficulty scaling with increasingly complex board targets",
                        "Fully responsive and playable across devices",
                        "Pure HTML, CSS, and Vanilla JavaScript — no external frameworks. Every line of code was written by me."
                    ]}
                    challenges={[
                        "Challenge 1: Implementing the Knight’s pathfinding algorithm to determine the optimal route and move count. /n Solution: Designed and implemented a simplified version of the Breadth-First Search (BFS) algorithm to calculate the shortest path efficiently for the Knight’s L-shaped moves.",
                        "Challenge 2: Ensuring the game was fully functional and visually consistent across different browsers and screen sizes./n Solution: Applied responsive design principles and rigorously tested cross-browser compatibility."
                    ]}
                    takeaways={[
                        "Gained hands-on experience with algorithm design, specifically BFS for game logic.",
                        "Improved problem decomposition skills by breaking complex movements into simple programmable rules.",
                        "Strengthened DOM manipulation and event-handling techniques in Vanilla JavaScript.",
                        "Learned how to balance performance and complexity in browser-based games."
                    ]}
                />
            );
        },
    },
    {
        description: "A task management tool with full CRUD functionality",
        title: "Task-Tracker",
        stack: ["html", "css", "javascript", "nodejs", "mongodb"],
        src: "/img/task-list.png",
        ctaText: "GitHub",
        ctaLink: "https://github.com/Asthere0n/Task-Tracker",
        ctaStyle: "bg-yellow-600",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="At my workplace, we struggled to track which tasks were completed, who completed them, and when. To both solve this issue and apply my growing backend skills from The Odin Project curriculum, I decided to build a task management app that allowed full task tracking, team accountability, and provided me hands-on experience with real-world backend development."
                    keyFeatures={[
                        "Neo-brutalist custom design from scratch.",
                        "Fully responsive for desktop and mobile screens",
                        "RESTful API built with Express and NodeJS",
                        "Full CRUD functionality: Create, Read, Update, Delete tasks",
                        "Mongoose schema design for task data management",
                        "Server-Side Rendering (SSR)",
                        "MVC (Model-View-Controller) design pattern implementation",
                        "Deployed on RailwayApp"
                    ]}
                    challenges={[
                        "Challenge 1: Structuring a scalable backend architecture as the app complexity grew. /n Solution: Adopted the MVC pattern early, which made the codebase cleaner, modular, and easier to debug.",
                        "Challenge 2: Adapting the neo-brutalist UI to be fully responsive across devices. /n Solution: Applied CSS media queries and flexible layouts, ensuring a smooth experience on both mobile and desktop.",
                        "Challenge 3: Handling deployment on a cloud platform for the first time. /n Solution: Researched and deployed the project on Railway.App, learning cloud hosting, environment variables, and remote database connections."
                    ]}
                    takeaways={[
                        "Gained practical experience in HTTP communication, client-server interaction, and API route handling.",
                        "Learned how to structure a full CRUD application with persistent data storage.",
                        "First exposure to the MVC pattern, which built a strong foundation for later understanding component-based frameworks like React.",
                        "Improved my skills in responsive design and browser rendering behaviors."
                    ]}
                />
            );
        },
    },
    {
        description: "A full personal and professional migration to Arch Linux",
        stack: ["linux", "css"],
        title: "Arch Linux (btw)",
        src: "/img/arch-linux.png",
        ctaText: "Active",
        ctaLink: "https://archlinux.org/",
        ctaStyle: "bg-yellow-600",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="Concerned about personal data privacy, data ownership, and the increasing influence of large service providers, I decided to take full control of my operating environment. Inspired by a video from PewDiePie and motivated by my growing awareness of data security risks—especially combined with AI advancements—I fully transitioned my entire OS and software suite to open-source, self-controlled alternatives."
                    keyFeatures={[
                        "Full migration from proprietary systems to Arch Linux",
                        "Customized dual-monitor workflow using custom shell scripts",
                        "Hotkey-based keyboard layout switching via shell scripting",
                        "Complete open-source software stack replacement (e.g., GIMP for image editing, Okular for PDF documents)",
                        "Secure system configuration with minimal telemetry and improved data ownership",
                        "Extensive use of Arch community documentation for troubleshooting, customization and optimization"
                    ]}
                    challenges={[
                        "Challenge 1: Identifying open-source alternatives for all proprietary software needs. /n Solution: Researched, tested, and integrated tools like GIMP, LibreOffice, OBS, and open-source development tools into my daily workflow.",
                        "Challenge 2: Critical installation error — accidentally deleted bootloader while partitioning disks during first Arch Linux installation. /n Solution: Leveraged Arch Linux documentation, community forums, and extensive reading to recover the system, reinstall the bootloader, and complete installation.",
                        "Challenge 3: High learning curve when customizing the system and integrating automation into daily tasks. /n Solution: Developed custom shell scripts to automate workspace management (e.g., dynamic monitor layouts, keyboard remapping, window tiling), improving overall productivity and control."
                    ]}
                    takeaways={[
                        "Developed strong system administration and Linux troubleshooting skills",
                        "Gained deep understanding of data storage, disk partitioning, bootloaders, and system recovery",
                        "Strengthened personal understanding of data privacy, security principles, and ethical software use",
                        "Improved problem-solving by using community-driven documentation and self-research"
                    ]}
                />
            );
        },
    },
    {
        description: "full-stack web app to build, manage, and store Dungeons & Dragons characters with a bold comic-book aesthetic",
        stack: ["html", "css", "typescript", "nextjs", "mongodb"],
        title: "Paper Dragon",
        src: "/img/paper-dragon.svg",
        ctaText: "In progress",
        ctaLink: "#",
        ctaStyle: "bg-yellow-600",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="Building and managing Dungeons & Dragons characters often involves scattered tools, manual tracking, and disorganized character sheets. Paper Dragon aims to centralize character creation, customization, and storage while providing a beautiful, comic-style interface and long-term extensibility."
                    keyFeatures={[
                        "Full user authentication via Clerk for secure profiles",
                        "MongoDB database integration to persist and manage character data",
                        "Creative Commons SRD 5.1 integration for rules, abilities, classes, spells, and other D&D data",
                        "Comic-inspired visual design using ShadCN components and custom styling",
                        "Character Sheet builder with real-time data validation"
                    ]}
                    challenges={[
                        "Challenge 1: Scaling up to a much larger, more complex project than previous personal builds. /n Solution: Carefully planning project architecture, breaking down features into smaller milestones, and continuously refactoring code for maintainability.",
                        "Challenge 2: Handling dynamic data structures for complex character data while preserving flexibility. /n Solution: Designing robust MongoDB schemas that can adapt to different classes, abilities, and customization options.",
                        "Challenge 3: Balancing creative design vision with functional UI/UX best practices. /n Solution: Leveraging ShadCN’s component library for consistency while adding custom comic-style visual elements for personality."
                    ]}
                    takeaways={[
                        "Gained practical experience in full-stack architecture with NextJS and MongoDB",
                        "Strengthened API design, dynamic routing, and backend/frontend data synchronization",
                        "Integrated complex third-party services (Clerk authentication, SRD data parsing)",
                        "Learned to plan long-term feature roadmaps for scalable projects",
                        "Improved version control practices on Git for managing larger codebases"
                    ]}
                />
            );
        },
    },
    {
        description: "full-stack web app to build, manage, and store Dungeons & Dragons characters with a bold comic-book aesthetic",
        stack: ["html", "css", "typescript", "nextjs"],
        title: "Personal Portfolio",
        src: "/img/paper-dragon.svg",
        ctaText: "Visit",
        ctaLink: "#",
        ctaStyle: "bg-green-500",
        content: function () {
            return (
                <ExpandedCard
                    title={this.title}
                    description="Building and managing Dungeons & Dragons characters often involves scattered tools, manual tracking, and disorganized character sheets. Paper Dragon aims to centralize character creation, customization, and storage while providing a beautiful, comic-style interface and long-term extensibility."
                    keyFeatures={[
                        "Full user authentication via Clerk for secure profiles",
                        "MongoDB database integration to persist and manage character data",
                        "Creative Commons SRD 5.1 integration for rules, abilities, classes, spells, and other D&D data",
                        "Comic-inspired visual design using ShadCN components and custom styling",
                        "Character Sheet builder with real-time data validation"
                    ]}
                    challenges={[
                        "Challenge 1: Scaling up to a much larger, more complex project than previous personal builds. /n Solution: Carefully planning project architecture, breaking down features into smaller milestones, and continuously refactoring code for maintainability.",
                        "Challenge 2: Handling dynamic data structures for complex character data while preserving flexibility. /n Solution: Designing robust MongoDB schemas that can adapt to different classes, abilities, and customization options.",
                        "Challenge 3: Balancing creative design vision with functional UI/UX best practices. /n Solution: Leveraging ShadCN’s component library for consistency while adding custom comic-style visual elements for personality."
                    ]}
                    takeaways={[
                        "Gained practical experience in full-stack architecture with NextJS and MongoDB",
                        "Strengthened API design, dynamic routing, and backend/frontend data synchronization",
                        "Integrated complex third-party services (Clerk authentication, SRD data parsing)",
                        "Learned to plan long-term feature roadmaps for scalable projects",
                        "Improved version control practices on Git for managing larger codebases"
                    ]}
                />
            );
        },
    }
];

export default cards
"use client";

import { Carousel } from "@/components/ui/carousel";


export function LearningCaroussel() {
    const slideData = [
        {
            title: "Eloquent JavaScript",
            button: "See more",
            src: "/img/EloquentJS.jpg",
            link: "https://eloquentjavascript.net/",
            description: "Eloquent JavaScript solidified my core JavaScript understanding. I particularly enjoyed how updated and relevant it is to modern web development and that the progression it's project based."
        },
        {
            title: "The Odin Project",
            button: "See more",
            src: "/img/odinproject.png",
            link:"https://www.theodinproject.com/",
            description: "This course with it's open-sourced project-based curriculum taught me the ins & outs of full-stack deployment, git workflows and served me as a structure path through all the information available in the internet. It equipped me with problem-solving resilience and made me fall in love with the open-source community."
        },
        {
            title: "Refactoring UI",
            button: "See more",
            src: "/img/refactoringui.png",
            link:"https://www.refactoringui.com/",
            description: "This book gave me some great insights on interface design, I found particularly interesting the visual hierarchy. How fundamental is to understand the non-verbal communication that happens within the web. I found fascinating how the colors, shapes and sizes of the elements in screen can completely change the UX."
        },
        {
            title: "Grokking Algorithms",
            button: "See more",
            src: "/img/grokkingalgorithms.jpg",
            link:"https://www.amazon.co.uk/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230",
            description: "I appreciate the practicality of the book focusing in algorithms that are commonly useful within the industry (such us quicksort, binary search, hash tables or node trees). I think I fall in love with coding when I fully wrapped my mind around the concept of recursivity and how we can solve very complex problems by reducing them into very small and simple problems using recursivity."
        },
        {
            title: "Learn Git Branching",
            button: "See more",
            src: "/img/learnGitBranching.png",
            link:"https://learngitbranching.js.org/",
            description: "The gamified challenges kept me engaged while reinforcing my understanding of Git’s underlying mechanics. Instead of memorizing commands, I built an intuitive mental model of how Git works, which has made me more confident in real-world version control tasks. It’s a resource I’d recommend to anyone who wants to truly “see” Git in action rather than just read about it."
        },
        {
            title: "SQL Bolt",
            button: "See More",
            src: "/img/sqlbolt.png",
            link:"https://sqlbolt.com/",
            description: "The platform’s step-by-step approach let me practice queries directly in the browser, getting instant feedback and refining my understanding along the way. I appreciated how it built complexity gradually, helping me go from simple queries to more advanced database operations with confidence."
        }
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}

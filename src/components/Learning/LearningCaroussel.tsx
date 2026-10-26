"use client";

import { TestimonialCarousel, type Testimonial } from "@/components/ui/profile-card-testimonial-carousel";

export function LearningCaroussel() {
    const slideData: Testimonial[] = [
        {
            title: "A structured path into full-stack development",
            name: "The Odin Project",
            description:
            "This course with it's open-sourced project-based curriculum taught me the ins & outs of full-stack deployment, git workflows and served me as a structure path through all the information available in the internet. It equipped me with problem-solving resilience and made me fall in love with the open-source community.",
            imageUrl: "/img/odinproject.png",
            githubUrl: "https://www.theodinproject.com/",
        },
        {
            title: "Solidifying the JavaScript fundamentals",
            name: "Eloquent JavaScript",
            description:
            "Eloquent JavaScript solidified my core JavaScript understanding. I particularly enjoyed how updated and relevant it is to modern web development and that the progression it's project based.",
            imageUrl: "/img/EloquentJS.jpg",
            githubUrl: "https://eloquentjavascript.net/",
        },
        {
            title: "Learning to design interfaces that communicate",
            name: "Refactoring UI",
            description:
            "This book gave me some great insights on interface design, I found particularly interesting the visual hierarchy. How fundamental is to understand the non-verbal communication that happens within the web. I found fascinating how the colors, shapes and sizes of the elements in screen can completely change the UX.",
            imageUrl: "/img/refactoringui.png",
            githubUrl: "https://www.refactoringui.com/",
        },
        {
            title: "Thinking recursively about hard problems",
            name: "Grokking Algorithms",
            description:
            "I appreciate the practicality of the book focusing in algorithms that are commonly useful within the industry (such us quicksort, binary search, hash tables or node trees). I think I fall in love with coding when I fully wrapped my mind around the concept of recursivity and how we can solve very complex problems by reducing them into very small and simple problems using recursivity.",
            imageUrl: "/img/grokkingalgorithms.jpg",
            githubUrl: "https://www.amazon.co.uk/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230",
        },
        {
            title: "Building an intuitive mental model of Git",
            name: "Learn Git Branching",
            description:
            "The gamified challenges kept me engaged while reinforcing my understanding of Git's underlying mechanics. Instead of memorizing commands, I built an intuitive mental model of how Git works, which has made me more confident in real-world version control tasks. It's a resource I'd recommend to anyone who wants to truly “see” Git in action rather than just read about it.",
            imageUrl: "/img/learnGitBranching.png",
            githubUrl: "https://learngitbranching.js.org/",
        },
        {
            title: "Practicing SQL directly in the browser",
            name: "SQL Bolt",
            description:
            "The platform's step-by-step approach let me practice queries directly in the browser, getting instant feedback and refining my understanding along the way. I appreciated how it built complexity gradually, helping me go from simple queries to more advanced database operations with confidence.",
            imageUrl: "/img/sqlbolt.png",
            githubUrl: "https://sqlbolt.com/",
        },
    ];

    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <TestimonialCarousel testimonials={slideData} />
        </div>
    );
}

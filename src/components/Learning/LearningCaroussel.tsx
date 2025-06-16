"use client";

import { Carousel } from "@/components/ui/carousel";
import { button } from "motion/react-client";
import { title } from "process";


export function LearningCaroussel() {
    const slideData = [
        {
            title: "Eloquent JavaScript",
            button: "See more",
            src: "/img/EloquentJS.jpg",
            description: "Eloquent JavaScript solidified my core JavaScript understanding. I particularly enjoyed how updated and relevant it is to modern web development and that it's project based."
        },
        {
            title: "The Odin Project",
            button: "See more",
            src: "/img/odinproject.png",
            description: "This course with it's open-sourced project-based curriculum taught me the ins & outs of full-stack deployment, git workflows and served me as a structure path through all the information available in the internet. It equipped me with problem-solving resilience and made me fall in love with the open-source community."
        },
        {
            title: "Refactoring UI",
            button: "See more",
            src: "/img/refactoringui.png",
            description: "This book gave me some great insights on design, I found specially interesting the visual hierarchy. How fundamental is to understand the non-verbal communication that happens in the web. I found fascinating how the colors, shapes and sizes of the elements in screen can completely change the UX."
        },
        {
            title: "Grokking Algorithms",
            button: "See more",
            src: "/img/grokkingalgorithms.jpg",
            description: "Despite being written with Python developers on mind, I found very useful it's code examples and it's graphs. I also appreciate the practicality of the book focusing in algorithms that are commonly useful within the industry (such us quicksort, binary search, hash tables or node trees). I think I fall in love with coding when I fully wrapped my mind around the concept of recursivity and how we can solve very hard problems by breaking them into very small and simple problems using recursivity."
        },
        {
            title: "Learn Git Branching",
            button: "See more",
            src: "/img/learnGitBranching.png",
            description: "Despite being written with Python developers on mind, I found very useful it's code examples and it's graphs. I also appreciate the practicality of the book focusing in algorithms that are commonly useful within the industry (such us quicksort, binary search, hash tables or node trees). I think I fall in love with coding when I fully wrapped my mind around the concept of recursivity and how we can solve very hard problems by breaking them into very small and simple problems using recursivity."
        },
        {
            title: "SQL Bolt",
            button: "See More",
            src: "/img/sqlbolt.jpeg",
            description: ""
        }
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}

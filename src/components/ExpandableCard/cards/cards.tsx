import { p } from "motion/react-client"
import TaskTracker from "./TaskTracker";
import EKnightMa from "./EKnightMa";
import Hyprland from "./Hyprland";
import PaperDragon from "./PaperDragon";
import DayDot from "./DayDot";

const cards = [
    {
        description: "A task management tool with full CRUD functionality",
        title: "Task-Tracker",
        src: "/img/task-list.png",
        ctaText: "Demo",
        ctaLink: "https://github.com/Asthere0n/Task-Tracker",
        content: () => {
            return (
                <TaskTracker/>
            );
        },
    },
    {
        description: "A web tool that simplifies expiry date calculations for perishable products",
        title: "DayDot",
        src: "/img/Daydot.jpg",
        ctaText: "Unavailable",
        ctaLink: "https://day-dot.vercel.app/",
        content: () => {
            return (
                <DayDot/>
            );
        },
    },
    {
        description: "Game based on the Knight in chess, against an AI using pathfinding algorythms",
        title: "E-Knight-ma",
        src: "/img/ChessKnight.webp",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <EKnightMa/>
            );
        },
    },

    {
        description: "A full personal and professional migration to Arch Linux",
        title: "Arch Linux (btw)",
        src: "/img/arch-linux.png",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <Hyprland/>
            );
        },
    },
    {
        description: "full-stack web app to build, manage, and store Dungeons & Dragons characters with a bold comic-book aesthetic",
        title: "Paper Dragon",
        src: "/img/paper-dragon.svg",
        ctaText: "Unavailable",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <PaperDragon/>
            );
        },
    },
];

export default cards
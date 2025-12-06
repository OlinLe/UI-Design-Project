import { Project } from '../types';

export const projects: Project[] = [
    {
        id: "SlopeSync",
        slug: "SlopeSync",
        title: "UX Design Course Project – Skiing Social App",
        summary: "A mobile application designed to help skiers find groups, track tricks, and share progression.",
        isCourseProject: true,
        images: [
            "/images/SlopeSync/SlopeSyncLogo.png"
        ]
    },
    {
        id: "PickSeer",
        slug: "PickSeer",
        title: "Smart fantasy assistant",
        summary: "A smart fantasy assistant that guides your draft picks, predicts outcomes, and helps you build the strongest draft.",
        isCourseProject: false,
        images: [
            "/images/Prodo/fantasy.png"
        ]
    }
];
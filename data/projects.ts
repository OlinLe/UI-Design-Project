import { Project } from '../types';

export const projects: Project[] = [
    {
        id: "SlopeSync",
        slug: "SlopeSync", // Corresponds to pages/projects/ux-course-project.tsx
        title: "UX Design Course Project – Skiing Social App",
        summary: "A mobile application designed to help novice gardeners track plant health.",
        role: "UX Researcher & UI Designer",
        isCourseProject: true,
        images: [
            "/images/SlopeSync/SlopeSyncLogo.png"
        ]
    },
    {
        id: "Prodo",
        slug: "Prodo", // Corresponds to pages/projects/skiing-community-app.tsx
        title: "College student Productivity/scheduling webapp",
        summary: "A social platform connecting solo skiers with groups at their skill level.",
        role: "UX/UI Designer & Front-End Dev",
        isCourseProject: false,
        images: [
            "/images/Prodo/ProdoLogo.png"
        ]
    }
];
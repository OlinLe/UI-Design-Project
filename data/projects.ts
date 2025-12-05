import { Project } from '../types';

export const projects: Project[] = [
    {
        id: "ux-course-project",
        slug: "ux-course-project",
        title: "UX Design Course Project – SmartPlant App",
        summary: "A mobile application designed to help novice gardeners track plant health.",
        role: "UX Researcher & UI Designer",
        isCourseProject: true,
        problem: "Novice gardeners often kill their plants because they forget watering schedules or don't understand specific sunlight needs. Existing apps are too complex or lack visual cues.",
        tools: ["Figma", "Miro", "Paper & Pencil", "Google Forms"],
        process: {
            sketches: "I started with crazy-8 sketches to generate rapid ideas for the dashboard layout, focusing on the most critical information: water status and sunlight.",
            brainstorming: "Conducted a brainstorming session to map out user flows for 'Adding a Plant' and 'Watering a Plant' to ensure the fewest clicks possible.",
            surveys: "Surveyed 25 local gardeners. Key finding: 80% preferred push notifications over email reminders, and 60% wanted visual health indicators.",
            empathyMaps: "Created an empathy map for 'Busy Brenda', a persona who loves plants but works 50 hours a week. This highlighted her anxiety about killing plants due to neglect.",
            prototypes: "Moved from paper low-fi wireframes to a clickable high-fidelity prototype in Figma to test the navigation structure.",
            userTesting: "Conducted moderated usability testing with 5 participants. We discovered the 'Add Plant' button was too small, leading to a 15% error rate.",
            heuristics: "Applied Nielsen’s Visibility of System Status by adding clear 'Thirsty' vs 'Happy' icons. Improved Consistency by standardizing button styles across screens."
        },
        outcome: "The final design improved task completion speed by 40% compared to the initial wireframe. I learned the importance of testing early before committing to high-fidelity visuals."
    },
    {
        id: "skiing-community-app",
        slug: "skiing-community-app",
        title: "Skiing Community App – Social Platform",
        summary: "A social platform connecting solo skiers with groups at their skill level.",
        role: "UX/UI Designer & Front-End Dev",
        isCourseProject: false,
        problem: "Solo skiers often feel unsafe or lonely on the mountain, but finding a group with matching speed and difficulty preferences is awkward and difficult in person.",
        tools: ["Adobe XD", "React Native", "Illustrator"],
        process: {
            sketches: "Sketched map-based interfaces vs. list-based interfaces to see which was more intuitive for finding nearby groups.",
            brainstorming: "Focused on trust and safety features, brainstorming verification methods for users meeting strangers on the mountain.",
            surveys: "Asked 50 skiers about their biggest pain points. 'Skill mismatch' was the #1 reason people avoided group skiing.",
            empathyMaps: "Mapped the feelings of a beginner skier who is intimidated by experts. This led to the 'Strict Skill Filter' feature.",
            prototypes: "Created a flow for 'Create a Group' and 'Join a Ride'.",
            userTesting: "Tested the 'Ride Request' flow. Users were confused by the terminology, so I changed 'Ping' to 'Request to Join'.",
            heuristics: "Applied Match Between System and Real World by using common trail symbols (Green Circle, Black Diamond) as the primary UI language."
        },
        outcome: "Designed a high-trust system where users felt comfortable meeting strangers. Learned how to balance gamification with safety features."
    }
];
export interface ProjectProcess {
    sketches: string;
    brainstorming: string;
    surveys: string;
    empathyMaps: string;
    prototypes: string;
    userTesting: string;
    heuristics: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    summary: string;
    role: string;
    isCourseProject: boolean;
    problem: string;
    tools: string[];
    process: ProjectProcess;
    outcome: string;
}
export interface Project {
    id: string;
    slug: string;     // Must match the filename in pages/projects/
    title: string;
    summary: string;  // Short description for the card
    role: string;     // e.g. "UX Researcher"
    isCourseProject: boolean; // Triggers the "Course Project" badge
    images: string[]; // Array of image paths (we use images[0] for the cover)
}
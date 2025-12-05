import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                {/* TODO: Replace with next/image */}
                <span>Project Thumbnail Placeholder</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    {project.isCourseProject && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
              Course Project
            </span>
                    )}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.summary}</p>
                <p className="text-xs text-gray-500 mb-4 font-mono">Role: {project.role}</p>

                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block text-center w-full py-2 px-4 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                    View Case Study
                </Link>
            </div>
        </div>
    );
}
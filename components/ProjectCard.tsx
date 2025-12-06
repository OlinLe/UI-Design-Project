import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const hasImage = project.images && project.images.length > 0;

    return (
        // CHANGED: bg-white -> bg-gray-800, border-gray-200 -> border-gray-700
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl hover:border-gray-600 transition-all duration-300 flex flex-col h-full group">

            {/* CHANGED: bg-gray-100 -> bg-gray-900 (Image background) */}
            <div className="h-48 bg-gray-900 relative border-b border-gray-700">
                {hasImage ? (
                    <Image
                        src={project.images[0]}
                        alt={`${project.title} cover`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    {project.isCourseProject && (
                        // CHANGED: Blue badge adjusted for dark mode readability
                        <span className="bg-blue-900/30 text-blue-200 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-blue-800">
                            Course Project
                        </span>
                    )}
                </div>

                {/* Text automatically inherits white from globals, but we ensure specificity */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>

                {/* CHANGED: text-gray-600 -> text-gray-400 */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.summary}</p>

                {/* CHANGED: text-gray-500 -> text-gray-500 (stays similar) */}
                <p className="text-xs text-gray-500 mb-4 font-mono">Role: {project.role}</p>

                <Link
                    href={`/projects/${project.slug}`}
                    // CHANGED: Button styling for dark mode
                    className="inline-block text-center w-full py-2 px-4 bg-gray-800 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                    View Case Study
                </Link>
            </div>
        </div>
    );
}
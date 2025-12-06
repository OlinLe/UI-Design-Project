import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const hasImage = project.images && project.images.length > 0;

    return (
        <div className="bg-green-800 border border-green-700 rounded-xl overflow-hidden hover:shadow-2xl hover:border-green-600 transition-all duration-300 flex flex-col h-full group">

            {/* Image Section */}
            <div className="h-48 bg-green-900 relative border-b border-green-700">
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

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    {project.isCourseProject && (
                        <span className="bg-green-900/30 text-green-200 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-green-800">
                            Course Project
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.summary}</p>


                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block text-center w-full py-2 px-4 bg-green-800 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                    View Case Study
                </Link>
            </div>
        </div>
    );
}
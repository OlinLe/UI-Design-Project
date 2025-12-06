import React from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
    return (
        <Layout title="Projects | Olin Leigland">
            <div className="bg-green-950 min-h-screen py-20">
                <div className="max-w-5xl mx-auto px-6">
                    
                    {/* Page Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl font-extrabold text-white mb-4">Selected Work</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A showcase of my UX case studies, interface designs, and technical applications.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

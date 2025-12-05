import { GetStaticProps, GetStaticPaths } from 'next';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

// Type for the params
interface Params extends ParsedUrlQuery {
    slug: string;
}

// Type for the page props
interface ProjectDetailProps {
    project: Project;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
    const { slug } = params as Params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { notFound: true };
    }

    return { props: { project } };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <Layout title={`${project.title} | Case Study`}>
            <article className="max-w-3xl mx-auto px-6 py-12">

                {/* Navigation Back */}
                <div className="mb-8">
                    <Link href="/#projects" className="text-primary font-medium hover:underline">
                        ← Back to Projects
                    </Link>
                </div>

                {/* --- HEADER --- */}
                <header className="mb-12 border-b border-gray-200 pb-12">
                    {project.isCourseProject && (
                        <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
              UX Design Course Project
            </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{project.title}</h1>
                    <p className="text-xl text-gray-600 mb-8">{project.summary}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <span className="block font-bold text-gray-900">Role</span>
                            <span className="text-gray-600">{project.role}</span>
                        </div>
                        <div>
                            <span className="block font-bold text-gray-900">Tools</span>
                            <span className="text-gray-600">{project.tools.join(", ")}</span>
                        </div>
                        <div>
                            <span className="block font-bold text-gray-900">Context</span>
                            <span className="text-gray-600">{project.isCourseProject ? "Academic" : "Personal/Freelance"}</span>
                        </div>
                    </div>
                </header>

                {/* --- THE PROBLEM --- */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                    <p className="text-lg text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                        {project.problem}
                    </p>
                </section>

                {/* --- DISCOVERY & PROCESS --- */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Discovery & Process</h2>

                    <div className="space-y-12">

                        <div>
                            <h3 className="text-xl font-bold mb-3">1. Sketches</h3>
                            <p className="text-gray-700 mb-4">{project.process.sketches}</p>
                            <div className="image-placeholder">
                                [Image: Early pencil sketches of the interface]
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">2. Brainstorming Sessions</h3>
                            <p className="text-gray-700 mb-4">{project.process.brainstorming}</p>
                            <div className="image-placeholder">
                                [Image: Whiteboard or Miro board screenshot]
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">3. User Surveys</h3>
                            <p className="text-gray-700 mb-4">{project.process.surveys}</p>
                            <div className="image-placeholder">
                                [Image: Graphs or data highlights from survey results]
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">4. Empathy Maps</h3>
                            <p className="text-gray-700 mb-4">{project.process.empathyMaps}</p>
                            <div className="image-placeholder">
                                [Image: Empathy map artifact]
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">5. Prototypes</h3>
                            <p className="text-gray-700 mb-4">{project.process.prototypes}</p>
                            <div className="image-placeholder">
                                [Image: Screenshot of Figma prototype or wireframes]
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">6. User Testing</h3>
                            <p className="text-gray-700 mb-4">{project.process.userTesting}</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-blue-900">7. Applied Usability Heuristics</h3>
                            <p className="text-blue-800">{project.process.heuristics}</p>
                        </div>

                    </div>
                </section>

                {/* --- OUTCOME --- */}
                <section className="mb-12 border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-bold mb-4">Outcome & Learnings</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {project.outcome}
                    </p>
                </section>

            </article>
        </Layout>
    );
}
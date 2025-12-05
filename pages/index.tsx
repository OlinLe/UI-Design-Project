import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout title="Riggs Gorby | UX Portfolio">

            {/* --- HERO SECTION --- */}
            <section className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-dark">
                    Hi, I'm <span className="text-primary">Riggs Gorby</span>.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                    A UX Designer & Developer focused on crafting human-centered digital experiences that solve real problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#projects" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                        View My Work
                    </Link>
                    <Link href="#about" className="px-8 py-3 rounded-lg font-semibold text-gray-600 border border-gray-300 hover:border-dark hover:text-dark transition-colors text-center">
                        More About Me
                    </Link>
                </div>
            </section>

            {/* --- ABOUT ME SECTION --- */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                I am a student passionate about bridging the gap between design and technology.
                                My journey started with coding, but I quickly realized that the best code in the world doesn't matter if users can't figure out how to use it.
                            </p>
                            <p>
                                This realization led me to User Experience design. I love breaking down complex problems
                                and building intuitive solutions. I enjoy the process of discovery—talking to users and uncovering what they actually need versus what they say they need.
                            </p>
                            <p>
                                Currently, I am looking for internship opportunities where I can apply my skills in user research, prototyping, and front-end development.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Profile Image Container */}
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="/images/headshot.jpeg" // TODO: Change 'headshot.jpg' to your actual filename
                                alt="Profile picture of Your Name"
                                fill // This makes the image fill the container size (w-64 h-64)
                                className="object-cover" // This ensures the image doesn't stretch/distort
                                priority // Loads this image immediately since it's above the fold
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SKILLS SECTION --- */}
            <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Skills & Tools</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 text-primary">UX Research</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• User Interviews</li>
                            <li>• Usability Testing</li>
                            <li>• Surveys & Data Analysis</li>
                            <li>• Empathy Mapping</li>
                            <li>• User Personas</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 text-primary">UX/UI Design</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Wireframing (Low/Hi-Fi)</li>
                            <li>• Interactive Prototyping</li>
                            <li>• Information Architecture</li>
                            <li>• Interaction Design</li>
                            <li>• Accessibility (WCAG)</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 text-primary">Development</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• HTML5 / CSS3</li>
                            <li>• TypeScript / JavaScript</li>
                            <li>• React & Next.js</li>
                            <li>• Tailwind CSS</li>
                            <li>• Git / GitHub</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Toolkit</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Figma', 'Adobe XD', 'Miro', 'Notion', 'VS Code', 'Google Analytics'].map(tool => (
                            <span key={tool} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {tool}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROJECTS SECTION --- */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
                        <p className="text-gray-600">A collection of UX case studies and technical projects.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
}
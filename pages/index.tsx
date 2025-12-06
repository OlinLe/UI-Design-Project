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
                {/* CHANGED: text-dark -> text-white */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                    Hi, I'm <span className="text-primary">Riggs Gorby</span>.
                </h1>
                {/* CHANGED: text-gray-600 -> text-gray-400 */}
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    I’m a Computer Science student and UX-focused developer who loves turning messy real-world problems into simple, intuitive interfaces especially for tools that support students, outdoor communities, and small businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#projects" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                        View My Work
                    </Link>
                    {/* CHANGED: Secondary button colors for dark mode */}
                    <Link href="#about" className="px-8 py-3 rounded-lg font-semibold text-gray-300 border border-gray-600 hover:border-white hover:text-white transition-colors text-center">
                        More About Me
                    </Link>
                </div>
            </section>

            {/* --- ABOUT ME SECTION --- */}
            {/* CHANGED: bg-gray-50 -> bg-gray-800 (Distinct stripe) */}
            <section id="about" className="py-20 bg-gray-800">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {/* CHANGED: text-white */}
                        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                        {/* CHANGED: text-gray-700 -> text-gray-300 */}
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I’m a Computer Science student at Montana State University who sits right at the intersection of design and engineering. I started out caring mostly about clean code and performance, but I realized quickly that none of that matters if the experience doesn’t feel effortless for the person using it.
                            </p>
                            <p>
                                That realization pulled me into User Experience design. I like talking to people, mapping out their goals and frustrations, and then prototyping flows that actually match the way they think. A lot of my work lives where logic and emotion meet figuring out how to make something both understandable and motivating to use.
                            </p>
                            <p>
                                Outside of class, I’ve been designing and building things like an AI-powered academic planner, tools for the ski and outdoor community, and simple, clean websites for small local brands. I’m currently looking for internships or early career roles where I can contribute across UX research, interaction design, and front-end implementation.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Profile Image Container */}
                        {/* CHANGED: border-white -> border-gray-700 (blends better) */}
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                            <Image
                                src="/images/headshot.jpeg"
                                alt="Profile picture of Riggs Gorby"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SKILLS SECTION --- */}
            {/* Background is transparent (gray-900 from body) so these cards pop */}
            <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center text-white">Skills & Tools</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    {/* CARD 1: CHANGED bg/border/text */}
                    <div className="bg-gray-800 p-6 border border-gray-700 rounded-xl shadow-sm hover:border-gray-600 transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">UX Research</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• User Interviews</li>
                            <li>• Usability Testing</li>
                            <li>• Surveys & Data Analysis</li>
                            <li>• Empathy Mapping</li>
                            <li>• User Personas</li>
                        </ul>
                    </div>

                    {/* CARD 2: CHANGED bg/border/text */}
                    <div className="bg-gray-800 p-6 border border-gray-700 rounded-xl shadow-sm hover:border-gray-600 transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">UX/UI Design</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Wireframing (Low/Hi-Fi)</li>
                            <li>• Interactive Prototyping</li>
                            <li>• Information Architecture</li>
                            <li>• Interaction Design</li>
                            <li>• Accessibility (WCAG)</li>
                        </ul>
                    </div>

                    {/* CARD 3: CHANGED bg/border/text */}
                    <div className="bg-gray-800 p-6 border border-gray-700 rounded-xl shadow-sm hover:border-gray-600 transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">Development</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• HTML5 / CSS3</li>
                            <li>• TypeScript / JavaScript</li>
                            <li>• React & Next.js</li>
                            <li>• Tailwind CSS</li>
                            <li>• Git / GitHub</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Toolkit</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Figma', 'Miro', 'Notion', 'VS Code', 'GitHub', 'Vercel / Firebase'].map(tool => (
                            // CHANGED: Chips style for dark mode
                            <span key={tool} className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROJECTS SECTION --- */}
            {/* CHANGED: Removed bg-gray-50. Now it sits on the dark body background */}
            <section id="projects" className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">Selected Work</h2>
                        <p className="text-gray-400">A collection of UX case studies and technical projects.</p>
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
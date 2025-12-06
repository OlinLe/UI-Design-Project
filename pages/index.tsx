import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout title="Olin Leigland | UX Portfolio">

            {/* --- ABOUT ME SECTION --- */}
            <section id="about" className="py-20 bg-green-950">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Hi, I’m Olin. I’m originally from Seattle, and over time I’ve developed a strong mix of interests both in technology and the outdoors. Living in Montana introduced me to skiing, hiking, and exploring the mountains, and those activities have become a regular part of my life. I also follow soccer and baseball closely and enjoy staying active whenever I can.
                            </p>
                            <p>
                                When I’m not outdoors, I’m usually working on software projects. I’m focused on improving my skills in software engineering, especially backend development, APIs, and building practical tools and applications. Coding has become a core part of how I think and solve problems, and I’m always working on something new to sharpen my abilities.
                            </p>
                            <p>
                                Overall, I’m someone who enjoys a balance between physical activity, sports, and technical work. Whether I’m working through a new project or planning the next ski day, I like staying engaged, learning, and building things that are useful.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                            <Image
                                src="/images/selfie.jpeg"
                                alt="Profile picture of Olin Leigland"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXPERIENCE SECTION (Replaces Skills) --- */}
            {/* Using bg-green-900 to create a subtle separation from the section above */}
            <section id="experience" className="py-20 bg-green-900">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Header matches About Me style */}
                    <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>

                    {/* Content Body - utilizing the same text styling as About Me */}
                    <div className="space-y-8 text-gray-300 leading-relaxed max-w-3xl">

                        {/* Experience Item 1 (Placeholder - Edit this!) */}
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white">Computer Science Student</h3>
                            <p className="text-sm text-primary mb-2">Montana State University | 2021 – Present</p>
                            <p>
                                Focusing on software engineering principles, algorithms, and full-stack development.
                                Built various projects ranging from low-level systems to modern web applications using React and Next.js.
                            </p>
                        </div>

                        {/* Experience Item 2 (Placeholder - Edit this!) */}
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white">Freelance Developer & Designer</h3>
                            <p className="text-sm text-primary mb-2">Self-Employed | 2022 – Present</p>
                            <p>
                                Design and build responsive websites for local businesses and personal projects.
                                Specialized in creating clean, user-friendly interfaces that solve specific user problems.
                            </p>
                        </div>

                        {/* Experience Item 3 (Placeholder - Edit this!) */}
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white">Outdoor Enthusiast & Leader</h3>
                            <p className="text-sm text-primary mb-2">Bozeman, MT</p>
                            <p>
                                apply the same discipline from coding to the outdoors. Planning complex ski routes and
                                navigating backcountry terrain requires risk assessment and careful preparation skills that translate directly to engineering.
                            </p>
                        </div>

                    </div>

                    {/* --- BUTTON FIXED --- */}
                    <div className="mt-16">
                        <Link
                            href="/projects"
                            // FIXED: text-green-950 ensures text is dark green against the white (primary) background
                            className="inline-block py-3 px-8 bg-primary text-green-950 font-bold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            View My Projects →
                        </Link>
                    </div>

                </div>
            </section>

        </Layout>
    );
}
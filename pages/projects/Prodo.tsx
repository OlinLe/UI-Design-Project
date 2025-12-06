import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ProdoProject() {
    return (
        <Layout title="Prodo | Case Study">
            <article className="max-w-4xl mx-auto px-6 py-12">

                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/#projects" className="text-primary hover:text-white transition-colors">
                        ← Back to Projects
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 border-b border-gray-800 pb-10">
          <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3 block">
            UX & Product Design
          </span>
                    <h1 className="text-5xl font-extrabold text-white mb-4">Prodo</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        An AI-powered academic planner that helps students turn deadlines into realistic study plans, so they can keep up with school without manually building a schedule.
                    </p>
                    <div className="mt-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-gray-500 text-sm text-center">
                        <div className="relative w-full h-72 rounded-lg overflow-hidden">
                            <Image
                                src="/images/Prodo/ProdoLogo.png" // TODO: add logo image here
                                alt="Prodo app mockup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </header>

                {/* Project Snapshot */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Project Snapshot</h2>
                    <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <div>
                            <span className="block font-semibold text-gray-100 mb-1">Role</span>
                            <p>Product Strategy · UX Research · Interaction Design</p>
                        </div>
                        <div>
                            <span className="block font-semibold text-gray-100 mb-1">Timeline</span>
                            <p>Ongoing side project · Multiple design + test cycles</p>
                        </div>
                        <div>
                            <span className="block font-semibold text-gray-100 mb-1">Platform</span>
                            <p>Mobile & Web · Student-focused</p>
                        </div>
                    </div>
                </section>

                {/* The Problem */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-gray-300 leading-relaxed shadow-lg">
                        <p>
                            Most calendar apps show when things are due, but they don’t help students decide <em>when</em> to work. I kept hearing the same thing from classmates: “I know my deadlines, I just never plan far enough ahead.”
                        </p>
                        <p className="mt-4">
                            There isn’t a simple way to turn assignments, exams, and projects into a realistic study plan that adapts as your workload and energy change.
                        </p>
                    </div>
                </section>

                {/* Tools */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Tools</h2>
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-gray-300 text-sm">
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full border border-gray-700">Figma – flows, wireframes & high-fi UI</span>
                            <span className="px-3 py-1 rounded-full border border-gray-700">Miro – journey maps & affinity mapping</span>
                            <span className="px-3 py-1 rounded-full border border-gray-700">Notion – research notes & feedback log</span>
                            <span className="px-3 py-1 rounded-full border border-gray-700">Firebase – auth & data</span>
                            <span className="px-3 py-1 rounded-full border border-gray-700">Gemini / LLM – AI schedule generation</span>
                        </div>
                    </div>
                </section>

                {/* Discovery & Process */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Discovery & Process</h2>

                    {/* Research */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Research & Insights</h3>
                        <p className="text-gray-300 mb-3">
                            I talked with college students who were juggling full course loads, part‑time work, and outdoor or social commitments. I asked how they track assignments now, when planning breaks down, and what “falling behind” looks like.
                        </p>
                        <p className="text-gray-300">
                            I kept seeing the same pattern: students don’t want another to‑do list. They want something that can look at everything at once, break it into chunks, and tell them what to work on today without micromanaging a calendar.
                        </p>
                    </div>

                    {/* Empathy & Persona */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Empathy Maps & Persona</h3>
                        <p className="text-gray-300 mb-3">
                            I built an empathy map around a primary persona: a motivated but overloaded student who cares about grades but constantly underestimates how long assignments will take.
                        </p>

                        <div className="mt-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-gray-500 text-sm text-center">
                            {/* TODO: Replace with Prodo empathy map / journey image */}
                            <div className="relative w-full h-64 rounded-md overflow-hidden">
                                <Image
                                    src="/images/Prodo/HIghFidelity.png"
                                    alt="Prodo empathy map"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Concept & Flows */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Concept & Core Flows</h3>
                        <p className="text-gray-300 mb-3">
                            From my research, I defined a simple loop: <span className="font-semibold">Capture → Plan → Adjust</span>. Prodo pulls in assignments and exams, breaks them into work blocks, and spreads them across days where the student actually has time.
                        </p>
                        <p className="text-gray-300">
                            I explored flows for adding tasks, viewing the week, and adjusting the schedule when life changes like adding a new exam or losing a study day.
                        </p>

                        <div className="mt-4 flex gap-4">
                            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                                <div className="relative w-full h-64 rounded-md overflow-hidden">
                                    <Image
                                        src="/images/Prodo/highfidelity1.png" // TODO: add high-fi screens
                                        alt="Prodo high-fidelity screens"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                                <div className="relative w-full h-64 rounded-md overflow-hidden">
                                    <Image
                                        src="/images/Prodo/lowfidelity2.png" // TODO: add low-fi / flow diagram
                                        alt="Prodo early wireframes and flows"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                                <div className="relative w-full h-64 rounded-md overflow-hidden">
                                    <Image
                                        src="/images/Prodo/calendarHigh.png" // TODO: add high-fi screens
                                        alt="Prodo high-fidelity screens"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                                <div className="relative w-full h-64 rounded-md overflow-hidden">
                                    <Image
                                        src="/images/Prodo/calendarWire.png" // TODO: add low-fi / flow diagram
                                        alt="Prodo early wireframes and flows"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prototyping & Testing */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Prototyping & Testing</h3>
                        <p className="text-gray-300 mb-3">
                            I moved from low‑fi wireframes into a clickable high‑fidelity prototype focused on the task list, daily schedule, and AI‑generated plan summary.
                        </p>
                        <p className="text-gray-300">
                            In testing, students loved the idea of “tell me what to do today,” but I saw confusion around how the AI made decisions. I added clearer explanations, lightweight controls for editing the plan, and better feedback when schedules update.
                        </p>
                    </div>

                    {/* Heuristics */}
                    <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50">
                        <h3 className="text-xl font-bold mb-2 text-blue-200">Applied Usability Heuristics</h3>
                        <p className="text-blue-100/80">
                            I leaned on Nielsen’s heuristics clear system status when plans update, consistent patterns across list and calendar views, simple language around 'today,' 'this week,' and 'upcoming,' and guardrails to reduce cognitive load.
                        </p>
                    </div>
                </section>

                {/* Outcome */}
                <section className="mb-4 border-t border-gray-800 pt-10">
                    <h2 className="text-2xl font-bold mb-4 text-white">Outcome & Learnings</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Students told me Prodo felt like “a planner that actually thinks with me.” The concept shifts planning from a manual chore into a small daily check‑in, with the AI doing most of the heavy lifting.
                    </p>
                    <p className="text-gray-300">
                        Building Prodo taught me how important it is to explain AI decisions in simple language, start from a tight core loop, and test with real schedules to see where the experience breaks under stress.
                    </p>
                </section>

            </article>
        </Layout>
    );
}
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function PickSeerProject() {
    return (
        <Layout title="Pick Seer | Fantasy Football Draft Helper">
            <article className="max-w-4xl mx-auto px-6 py-12">

                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/projects" className="text-primary hover:text-white transition-colors font-medium">
                        ← Back to Projects
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 border-b border-green-800 pb-10">
                    <h1 className="text-5xl font-extrabold text-white mb-4">Pick Seer</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-6">
                        A web app that helps fantasy football players draft confidently by generating real-time pick recommendations based on roster needs, positional value, and live draft activity.
                    </p>

                    {/* --- ADDED: Live Project Link --- */}
                    <div className="mb-8">
                        <a
                            href="https://nfl-fantasy-comparison-tool.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary text-green-950 font-bold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:-translate-y-1"
                        >
                            View Live App ↗
                        </a>
                    </div>

                    <div className="mt-4 bg-green-900 border border-green-800 rounded-lg p-4 text-gray-500 text-sm text-center">
                        <div className="relative w-full h-72 rounded-lg overflow-hidden">
                            <Image
                                src="/images/Prodo/fantasy.png"
                                alt="Pick Seer Dashboard Mockup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </header>

                {/* Project Snapshot */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Project Snapshot</h2>
                    <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-300 bg-green-900 border border-green-800 rounded-xl p-6">
                        <div>
                            <span className="block font-semibold text-green-400 mb-1">Role</span>
                            <p>Full-Stack Dev · Interaction Design · API Integration</p>
                        </div>
                        <div>
                            <span className="block font-semibold text-green-400 mb-1">Timeline</span>
                            <p>Independent Project · Iterative Testing</p>
                        </div>
                        <div>
                            <span className="block font-semibold text-green-400 mb-1">Platform</span>
                            <p>Web · Desktop + Mobile Responsive</p>
                        </div>
                    </div>
                </section>

                {/* The Problem */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
                    <div className="bg-green-900 p-6 rounded-xl border border-green-800 text-gray-300 leading-relaxed shadow-lg">
                        <p className="mb-4">
                            Fantasy football drafts move fast, and players often experience information overload. Managing rankings, tiers, positional scarcity, projections, and roster needs — all under a 60-second timer — leads to panic picks and poor drafting decisions.
                        </p>
                        <p className="italic text-green-200 border-l-4 border-green-500 pl-4">
                            “I know the players, but I freeze when I’m on the clock. There’s no simple tool that analyzes the board and explains why a pick makes sense.”
                        </p>
                    </div>
                </section>

                {/* Tools */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
                    <div className="bg-green-900 p-6 rounded-xl border border-green-800 text-gray-300 text-sm">
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full border border-green-700">Express.js – API server</span>
                            <span className="px-3 py-1 rounded-full border border-green-700">Sleeper API – Real-time data</span>
                            <span className="px-3 py-1 rounded-full border border-green-700">HTMX – Dynamic updates</span>
                            <span className="px-3 py-1 rounded-full border border-green-700">Local LLM – Rationale generation</span>
                            <span className="px-3 py-1 rounded-full border border-green-700">JavaScript / HTML / CSS</span>
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
                            I interviewed fantasy players to understand how they prepare. Players overwhelmingly said they jump between multiple tabs and spreadsheets, trying to combine rankings, team needs, and ADP data on the fly.
                        </p>
                        <p className="text-gray-300">
                            <strong>Primary Persona:</strong> A competitive fantasy player who loves data but wants fast, simple guidance during timed drafts — not long analysis or extra complexity.
                        </p>
                    </div>

                    {/* Concept & Low Fi */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4">Concept & Low-Fidelity</h3>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <p className="text-gray-300 mb-4">
                                    I defined a simple core loop: <span className="font-semibold text-green-400">Analyze → Recommend → Adjust</span>.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-4">
                                    <li><strong>Analyze:</strong> System tracks roster needs, ADP, & scarcity.</li>
                                    <li><strong>Recommend:</strong> Live-updating list of best picks.</li>
                                    <li><strong>Justify:</strong> Short explanations (e.g., “RB depth drop-off coming”).</li>
                                </ul>
                                <p className="text-gray-300 text-sm">
                                    Early sketches focused on fitting all this data onto one screen without overwhelming the user.
                                </p>
                            </div>

                            {/* Low Fi Image */}
                            <div className="order-1 md:order-2 bg-green-900 border border-green-800 rounded-lg p-4">
                                <div className="relative w-full h-64 rounded-md overflow-hidden">
                                    <Image
                                        src="/images/Prodo/lowfifantasy.jpg"
                                        alt="Low-fidelity sketches"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-center text-green-400 mt-2">Early Paper Prototypes</p>
                            </div>
                        </div>
                    </div>

                    {/* High Fidelity & Iterations */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-4">High-Fidelity & Iterations</h3>
                        <p className="text-gray-300 mb-6">
                            Early prototypes were tested in mock drafts. Users initially struggled to see when recommendations updated, so I introduced <strong>"Pick Updated" banners</strong> and <strong>color-coded positional groups</strong> to make scanning the board instant.
                        </p>

                        {/* Image Grid 1 */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-green-900 border border-green-800 rounded-lg p-4 group hover:border-green-600 transition-colors">
                                <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/Prodo/ss1.png"
                                        alt="Main Dashboard View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-green-400 mt-3 font-medium">The Main Dashboard</p>
                            </div>
                            <div className="bg-green-900 border border-green-800 rounded-lg p-4 group hover:border-green-600 transition-colors">
                                <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/Prodo/ss2.png"
                                        alt="Roster Analysis View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-green-400 mt-3 font-medium">Roster Construction Logic</p>
                            </div>
                        </div>

                        {/* Image Grid 2 */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-900 border border-green-800 rounded-lg p-4 group hover:border-green-600 transition-colors">
                                <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/Prodo/ss3.png"
                                        alt="Draft Board View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-green-400 mt-3 font-medium">Live Draft Board</p>
                            </div>
                            <div className="bg-green-900 border border-green-800 rounded-lg p-4 group hover:border-green-600 transition-colors">
                                <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/Prodo/ss4.png"
                                        alt="Mobile Responsive View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-green-400 mt-3 font-medium">Real-time Recommendation Engine</p>
                            </div>
                        </div>
                    </div>

                    {/* Heuristics */}
                    <div className="bg-green-900 p-8 rounded-xl border border-green-800">
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-green-800 pb-2">
                            Applied Usability Heuristics
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Column 1 */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">1. Visibility of System Status</h4>
                                    <p className="text-sm text-gray-300">
                                        “Pick Updated” banners and live roster panels keep users aware of internal calculations during fast-paced drafts.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">2. Match Between System & World</h4>
                                    <p className="text-sm text-gray-300">
                                        Uses familiar language (ADP, Tier, Upside) and standard color codes (QB=Red, RB=Green) matching major fantasy platforms.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">3. User Control & Freedom</h4>
                                    <p className="text-sm text-gray-300">
                                        Users can manually adjust recommendations, hide players, and undo mistaken selections with confirmation dialogs.
                                    </p>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">4. Consistency and Standards</h4>
                                    <p className="text-sm text-gray-300">
                                        Recommendation cards maintain identical size and structure. Action buttons always appear in predictable locations.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">5. Error Prevention</h4>
                                    <p className="text-sm text-gray-300">
                                        The tool warns users when drafting a taken player and flags lineup conflicts (e.g., empty RB slots) before the pick is made.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcome */}
                <section className="mb-4 border-t border-green-800 pt-10">
                    <h2 className="text-2xl font-bold mb-4 text-white">Outcome</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        The tool successfully reduced decision fatigue. In testing, users spent less time tab-switching and reported feeling significantly more confident in their later-round picks, where knowledge gaps usually lead to "panic drafting."
                    </p>
                    <p className="text-gray-300">
                        Building this taught me how to structure APIs for real-time responsiveness and how to use LLMs to generate "human-readable" logic from raw data stats.
                    </p>
                </section>

            </article>
        </Layout>
    );
}
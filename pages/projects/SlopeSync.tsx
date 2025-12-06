import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function SlopeSyncProject() {
  return (
    <Layout title="SlopeSync | Case Study">
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
            UX Design Course Project
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-4">SlopeSync</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            An app concept that helps riders pin tricks and runs to real mountain locations so they can discover new spots, share progression, and stay connected on the mountain.
          </p>
          <div className="mt-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-gray-500 text-sm text-center">
            <div className="relative w-full h-72 rounded-lg overflow-hidden">
              <Image
                src="/images/SlopeSync/SlopeSyncLogo.png"
                alt="SlopeSync app mockup"
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
              <p>UX Research · Interaction Design · Prototyping</p>
            </div>
            <div>
              <span className="block font-semibold text-gray-100 mb-1">Timeline</span>
              <p>Course project · 5 participants · Multiple rounds of testing</p>
            </div>
            <div>
              <span className="block font-semibold text-gray-100 mb-1">Platform</span>
              <p>Mobile · iOS / Android concept</p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-gray-300 leading-relaxed shadow-lg">
            <p>
              Most ski apps focus on stats like speed or vertical, but we found that riders especially park and freestyle riders care far more about <em>where</em> things happen and how they can progress together.
            </p>
            <p className="mt-4">
              There isn’t a simple way to view location‑based trick history, discover active spots, or share runs tied to real features on the mountain.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Tools</h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-gray-300 text-sm">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full border border-gray-700">Figma – wireframes & high‑fi prototype</span>
              <span className="px-3 py-1 rounded-full border border-gray-700">Google Forms – survey</span>
              <span className="px-3 py-1 rounded-full border border-gray-700">Miro – empathy maps & affinity mapping</span>
              <span className="px-3 py-1 rounded-full border border-gray-700">Notion – research notes</span>
              <span className="px-3 py-1 rounded-full border border-gray-700">Remote testing (FaceTime / screen share)</span>
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
              We surveyed and interviewed five riders between ages 16–30. We asked how they track their days, share runs, and explore terrain with friends.
            </p>
            <p className="text-gray-300">
              We kept hearing the same thing: riders want a way to <span className="font-semibold">see where tricks are happening</span>, remember lines, and explore more intentionally with their crew.
            </p>
          </div>

          {/* Empathy & Persona */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Empathy Maps & Persona</h3>
            <p className="text-gray-300 mb-3">
              We created empathy maps for riders like Zack, Izzy, Scarlett, Ethan, and Charlie. These helped us form a primary persona a freestyle‑focused rider who films tricks, rides socially, and feels current apps are too stats‑driven and not social enough.
            </p>

            {/* Empathy Map Image Placeholder */}
            <div className="mt-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-gray-500 text-sm text-center">
              {/* TODO: Replace with empathy map image */}
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/SlopeSync/MindMap.png"
                  alt="SlopeSync empathy map"
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
              From our research, we defined a simple loop: <span className="font-semibold">Record → Pin → Share</span>. SlopeSync records a run, lets riders pin a clip to a specific spot, and share it on a location‑based feed.
            </p>
            <p className="text-gray-300">
              We sketched several versions of the home screen, map, and recording controls, then mapped flows for recording runs, posting tricks, and finding nearby spots.
            </p>

            {/* Flow / Wireframe Placeholder */}
            <div className="mt-4 flex gap-4">
              <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="relative w-full h-64 rounded-md overflow-hidden">
                  <Image
                      src="/images/SlopeSync/highfidelity.png"
                      alt="SlopeSync flow 1"
                      fill
                      className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="relative w-full h-64 rounded-md overflow-hidden">
                  <Image
                      src="/images/SlopeSync/lowfidelity.png"
                      alt="SlopeSync flow 2"
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
              We moved from rough sketches into a high‑fidelity Figma prototype focused on the map, feed, and recording interactions. We then ran remote usability testing with the same five riders.
            </p>
            <p className="text-gray-300">
              Testing confirmed the value of the core idea but revealed issues around clarity and map pin behavior. We iterated by simplifying labels, improving tap targets, and making pin states more intuitive.
            </p>
          </div>

          {/* Heuristics */}
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-bold mb-2 text-blue-200">Applied Usability Heuristics</h3>
            <p className="text-blue-100/80">
              We applied Nielsen’s heuristics throughout the design clear feedback while recording, consistent iconography, predictable navigation patterns, and reduced cognitive load in posting flows.
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-4 border-t border-gray-800 pt-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Outcome & Learnings</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Riders responded strongly to the idea of tying tricks to locations and using SlopeSync to explore the mountain in a more intentional and social way. The concept fits naturally into a day of skiing, not just another stats app.
          </p>
          <p className="text-gray-300">
            This project reinforced how valuable it is to speak directly with users, define a focused MVP around one core loop, and use testing to refine interactions before expanding features.
          </p>
        </section>

      </article>
    </Layout>
  );
}
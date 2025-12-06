import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-green-900/90 backdrop-blur-sm border-b border-green-800">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
                    Olin Leigland
                </Link>

                <div className="space-x-8 text-sm font-medium hidden md:block">
                    {/* These remain anchor links because they live on the homepage */}
                    <Link href="/#about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
                    <Link href="/#skills" className="text-gray-300 hover:text-primary transition-colors">Skills</Link>
                    
                    {/* CHANGED: Now links to the standalone page */}
                    <Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</Link>
                </div>
            </div>
        </nav>
    );
}

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-dark hover:text-primary transition-colors">
                    Your Name
                </Link>

                <div className="space-x-8 text-sm font-medium hidden md:block">
                    {/* Scroll links for Home, standard links for detailed pages */}
                    <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
                </div>
            </div>
        </nav>
    );
}
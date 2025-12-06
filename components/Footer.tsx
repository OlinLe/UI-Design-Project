import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <p className="text-green-600 mb-4">
                    Designed & Built with Next.js and Tailwind CSS.
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="mailto:leiglando@gmail.com"
                        className="text-primary hover:underline transition-all"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olin-leigland-555105176/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-all"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/OlinLe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-all"
                    >
                        GitHub
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Riggs Gorby.
                </p>
            </div>
        </footer>
    );
}
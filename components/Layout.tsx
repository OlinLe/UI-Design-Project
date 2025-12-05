import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title = "UX Portfolio" }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta name="description" content="UX Design Portfolio" />
            </Head>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
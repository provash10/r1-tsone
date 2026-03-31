'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-center">
            <div>
                <span
                    data-aos="fade-down"
                    className="text-xs font-semibold text-sky-400 bg-slate-800 px-4 py-1.5 rounded-full"
                >
                    Learn. Build. Ship.
                </span>
                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-4xl sm:text-6xl font-bold text-white mt-6 mb-4 leading-tight"
                >
                    Master Modern <span className="text-sky-400">Web Dev</span>
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8"
                >
                    Hands-on tutorials in TypeScript, Next.js, React, Tailwind, GSAP and more.
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link href="/tutorials" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg duration-200">
                        Browse Tutorials
                    </Link>
                    <Link href="/register" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg duration-200">
                        Get Started Free
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

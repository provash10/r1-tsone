'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { tutorialsData } from '@/components/Tutorials/tutorialsData';

const PopularCourses: React.FC = () => {
    const popular = tutorialsData.slice(0, 3);

    return (
        <section className="bg-slate-900 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Popular Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {popular.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-slate-800 p-6 rounded-xl flex flex-col gap-3"
                        >
                            <span className="text-xs font-semibold text-sky-400 bg-slate-700 px-3 py-1 rounded-full w-fit">{t.tag}</span>
                            <h3 className="text-white font-bold">{t.title}</h3>
                            <p className="text-slate-400 text-sm">{t.description}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-yellow-400 text-sm">⭐ {t.rating}</span>
                                <span className="text-green-400 font-semibold">${t.fee}</span>
                            </div>
                            <Link href={`/tutorials/${t.id}`} className="text-sm text-sky-400 hover:text-sky-300 duration-200">
                                Learn more →
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link href="/tutorials" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg duration-200">
                        View All Tutorials
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;

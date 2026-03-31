'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: 'Sarah K.', role: 'Frontend Dev', text: 'Dev-Story helped me land my first job. The tutorials are clear and practical.' },
    { name: 'James R.', role: 'Full Stack Dev', text: 'Best platform for learning Next.js and TypeScript together. Highly recommend.' },
    { name: 'Mia T.', role: 'UI Engineer', text: 'The GSAP and Framer Motion courses are top-notch. Learned so much in a week.' },
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-slate-950 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">What Students Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-slate-800 p-6 rounded-xl"
                        >
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                            <p className="text-white font-semibold">{t.name}</p>
                            <p className="text-sky-400 text-xs">{t.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

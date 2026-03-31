'use client';

import React from 'react';

const stats = [
    { label: 'Tutorials', value: '50+' },
    { label: 'Students', value: '10K+' },
    { label: 'Instructors', value: '20+' },
    { label: 'Rating', value: '4.9 ⭐' },
];

const Stats: React.FC = () => {
    return (
        <section className="bg-slate-900 py-14 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        data-aos="zoom-in"
                        data-aos-delay={i * 100}
                    >
                        <p className="text-3xl font-bold text-sky-400">{s.value}</p>
                        <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;

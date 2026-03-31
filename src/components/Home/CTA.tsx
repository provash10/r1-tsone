'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section className="bg-slate-900 py-20 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to start learning?</h2>
                <p className="text-slate-400 mb-8">Join thousands of developers building real skills with Dev-Story.</p>
                <Link href="/register" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg duration-200 text-lg">
                    Join for Free
                </Link>
            </motion.div>
        </section>
    );
};

export default CTA;

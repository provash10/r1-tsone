'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaBullseye, FaTools, FaMobileAlt } from 'react-icons/fa';

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: <FaBolt />,
    title: 'Fast Learning',
    desc: 'Concise, project-based tutorials that get you building fast.',
  },
  {
    icon: <FaBullseye />,
    title: 'Focused Content',
    desc: 'No fluff — every lesson is focused on real-world skills.',
  },
  {
    icon: <FaTools />,
    title: 'Hands-on Projects',
    desc: 'Build actual projects you can add to your portfolio.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Friendly',
    desc: 'Learn anywhere, anytime on any device.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Why TS One
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition"
            >
              <div className="text-3xl text-sky-400 mb-3 flex justify-center">
                {f.icon}
              </div>

              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
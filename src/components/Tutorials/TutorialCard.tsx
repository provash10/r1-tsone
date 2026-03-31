'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tutorial } from './tutorialsData';
import { cardVariants } from '@/animations/framerVariants';
import { tagSlideIn } from '@/animations/gsapAnimations';

type TutorialCardProps = {
    tutorial: Tutorial;
    index: number;
    onLearnMore: () => void;
};

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, index }) => {
    const tagRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (tagRef.current) {
            tagSlideIn(tagRef.current, index * 0.15 + 0.3);
        }
    }, [index]);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-6 rounded-xl shadow-md flex flex-col gap-3"
        >
            <span
                ref={tagRef}
                className="text-xs font-semibold text-sky-400 bg-slate-700 px-3 py-1 rounded-full w-fit"
            >
                {tutorial.tag}
            </span>
            <h3 className="text-lg font-bold text-white">{tutorial.title}</h3>
            <p className="text-slate-400 text-sm">{tutorial.description}</p>
            <div className="flex items-center justify-between mt-1">
                <span className="text-yellow-400 text-sm">⭐ {tutorial.rating}</span>
                <span className="text-green-400 font-semibold text-sm">${tutorial.fee}</span>
            </div>
            <Link
                href={`/tutorials/${tutorial.id}`}
                className="mt-auto text-sm text-sky-400 hover:text-sky-300 duration-200"
            >
                Learn more →
            </Link>
        </motion.div>
    );
};

export default TutorialCard;

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tutorial } from './tutorialsData';
import { modalBackdropVariants, modalContentVariants } from '@/animations/framerVariants';

type TutorialModalProps = {
    tutorial: Tutorial | null;
    onClose: () => void;
};

const TutorialModal: React.FC<TutorialModalProps> = ({ tutorial, onClose }) => {
    return (
        <AnimatePresence>
            {tutorial && (
                <motion.div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
                    variants={modalBackdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md"
                        variants={modalContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-xs font-semibold text-sky-400 bg-slate-700 px-3 py-1 rounded-full">
                            {tutorial.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-4 mb-2">{tutorial.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{tutorial.details}</p>
                        <div className="flex items-center gap-6 mt-4">
                            <span className="text-yellow-400 text-sm">⭐ {tutorial.rating} / 5</span>
                            <span className="text-green-400 font-bold">${tutorial.fee}</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-6 w-full py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 duration-200 cursor-pointer"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TutorialModal;

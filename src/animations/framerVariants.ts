import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
    }),
};

export const modalBackdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

export const modalContentVariants: Variants = {
    hidden: { scale: 0.85, opacity: 0, y: 40 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { scale: 0.85, opacity: 0, y: 40 },
};

export const toastVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
};

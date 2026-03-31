import gsap from 'gsap';

export const tagSlideIn = (element: HTMLElement, delay: number) => {
    gsap.from(element, {
        opacity: 0,
        x: -20,
        delay,
        duration: 0.4,
        ease: 'power2.out',
    });
};

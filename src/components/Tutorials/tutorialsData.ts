export type Tutorial = {
    id: number;
    title: string;
    description: string;
    tag: string;
    details: string;
    fee: number;
    rating: number;
};

export const tutorialsData: Tutorial[] = [
    {
        id: 1,
        title: 'TypeScript Basics',
        description: 'Learn the fundamentals of TypeScript types and interfaces.',
        tag: 'TypeScript',
        details: 'TypeScript is a strongly typed superset of JavaScript. You will learn about primitive types, interfaces, type aliases, generics, and how to configure tsconfig.json for your project.',
        fee: 29,
        rating: 4.8,
    },
    {
        id: 2,
        title: 'Next.js Routing',
        description: 'Understand file-based routing and dynamic routes in Next.js.',
        tag: 'Next.js',
        details: 'Next.js uses a file-based routing system inside the app directory. This tutorial covers static routes, dynamic segments like [id], nested layouts, and the difference between server and client components.',
        fee: 39,
        rating: 4.9,
    },
    {
        id: 3,
        title: 'Tailwind CSS',
        description: 'Style your app fast with utility-first CSS classes.',
        tag: 'CSS',
        details: 'Tailwind CSS lets you build designs directly in your markup. Learn about responsive prefixes (sm, md, lg), dark mode, custom themes in tailwind.config, and how to avoid class bloat.',
        fee: 19,
        rating: 4.7,
    },
    {
        id: 4,
        title: 'React Hooks',
        description: 'Master useState, useEffect, and custom hooks in React.',
        tag: 'React',
        details: 'React Hooks allow you to use state and lifecycle features in functional components. This tutorial covers useState, useEffect, useRef, useContext, and building your own custom hooks.',
        fee: 34,
        rating: 4.6,
    },
    {
        id: 5,
        title: 'GSAP Animations',
        description: 'Create smooth, high-performance animations with GSAP.',
        tag: 'GSAP',
        details: 'GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library. Learn gsap.from(), gsap.to(), timelines, ScrollTrigger, and how to integrate GSAP with React using useRef and useEffect.',
        fee: 49,
        rating: 4.9,
    },
    {
        id: 6,
        title: 'Framer Motion',
        description: 'Build declarative animations and transitions in React.',
        tag: 'Framer',
        details: 'Framer Motion is a React animation library. Learn motion components, initial/animate/exit props, variants, layout animations, and how to create page transitions in Next.js.',
        fee: 44,
        rating: 4.8,
    },
];

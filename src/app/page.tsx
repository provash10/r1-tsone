import Hero from '@/components/Home/Hero';
import Stats from '@/components/Home/Stats';
import Features from '@/components/Home/Features';
import PopularCourses from '@/components/Home/PopularCourses';
import Testimonials from '@/components/Home/Testimonials';
import CTA from '@/components/Home/CTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <Features />
            <PopularCourses />
            <Testimonials />
            <CTA />
        </main>
    );
}

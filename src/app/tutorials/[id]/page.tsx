import React from 'react';
import { tutorialsData } from '@/components/Tutorials/tutorialsData';
import { notFound } from 'next/navigation';
import CourseActions from '@/app/tutorials/[id]/CourseActions';

type Props = {
    params: Promise<{ id: string }>;
};

const TutorialDetail = async ({ params }: Props) => {
    const { id } = await params;
    const tutorial = tutorialsData.find((t) => t.id === Number(id));

    if (!tutorial) return notFound();

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">
            <div className="bg-slate-800 p-6 sm:p-10 rounded-xl shadow-md w-full max-w-2xl">
                <span className="text-xs font-semibold text-sky-400 bg-slate-700 px-3 py-1 rounded-full">
                    {tutorial.tag}
                </span>
                <h1 className="text-3xl font-bold text-white mt-4 mb-3">{tutorial.title}</h1>
                <p className="text-slate-400 text-sm mb-4">{tutorial.description}</p>
                <div className="flex items-center gap-6 mb-6">
                    <span className="text-yellow-400 text-base">⭐ {tutorial.rating} / 5</span>
                    <span className="text-green-400 font-bold text-lg">${tutorial.fee}</span>
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-8">{tutorial.details}</p>

                <CourseActions tutorial={tutorial} />

                <a
                    href="/tutorials"
                    className="mt-6 inline-block text-sm text-slate-400 hover:text-white duration-200"
                >
                    ← Back to Tutorials
                </a>
            </div>
        </div>
    );
};

export default TutorialDetail;

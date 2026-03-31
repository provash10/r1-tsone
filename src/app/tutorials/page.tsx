import React from 'react';
import TutorialList from '@/components/Tutorials/TutorialList';

const Tutorials: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Tutorials</h2>
                <TutorialList />
            </div>
        </div>
    );
};

export default Tutorials;

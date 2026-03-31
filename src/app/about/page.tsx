import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About</h2>
                <p className="text-slate-400 text-sm sm:text-base">Learn more about us and what we do.</p>
            </div>
        </div>
    );
};

export default Page;

import React from 'react';

type BannerProps = {
    title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="bg-slate-800 p-6 sm:p-10 rounded-xl shadow-md text-center w-full max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-slate-400 text-sm sm:text-base">Start building something amazing today.</p>
                <button className="mt-6 px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 duration-200 cursor-pointer">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Banner;

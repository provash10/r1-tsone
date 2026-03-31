import React from 'react';

type Member = {
    name: string;
    role: string;
};

const members: Member[] = [
    { name: 'Alice', role: 'Frontend Developer' },
    { name: 'Bob', role: 'Backend Developer' },
    { name: 'Carol', role: 'UI/UX Designer' },
];

const Teams: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Our Team</h2>
                <div className="space-y-4">
                    {members.map((member) => (
                        <div key={member.name} className="flex flex-wrap items-center justify-between bg-slate-700 px-4 py-3 rounded-lg gap-2">
                            <span className="text-white font-medium">{member.name}</span>
                            <span className="text-sky-400 text-sm">{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;

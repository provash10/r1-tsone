'use client';

import React from 'react';
import TutorialCard from './TutorialCard';
import { tutorialsData } from './tutorialsData';

const TutorialList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialsData.map((tutorial, index) => (
                <TutorialCard
                    key={tutorial.id}
                    tutorial={tutorial}
                    index={index}
                    onLearnMore={() => {}}
                />
            ))}
        </div>
    );
};

export default TutorialList;

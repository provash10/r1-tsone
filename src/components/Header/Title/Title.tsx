import React from 'react';

type TitleProps = {
    children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>{children}</h1>
        </div>
    );
};

export default Title;
'use client';

import { useEffect } from 'react';
import { initAOS } from './aosInit';

const AOSProvider = () => {
    useEffect(() => {
        initAOS();
    }, []);

    return null;
};

export default AOSProvider;

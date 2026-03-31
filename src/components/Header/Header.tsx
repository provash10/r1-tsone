import Link from 'next/link';
import React from 'react';

type HeaderProps = {
    brandName: string;
};

const Header: React.FC<HeaderProps> = ({ brandName }) => {
    return (
        <div className='bg-[#0a192f] px-6 py-4 sticky top-0 z-50'>
            <header className="flex flex-wrap justify-between items-center gap-4">
                <span className="text-sky-400 text-2xl font-bold">{brandName}</span>
                <nav className='flex flex-wrap items-center gap-4 text-slate-300 text-sm md:text-base'>
                    <Link href="/" className="hover:text-white duration-200">Home</Link>
                    <Link href="/about" className="hover:text-white duration-200">About</Link>
                    <Link href="/tutorials" className="hover:text-white duration-200">Tutorials</Link>
                    <Link href="/login" className="hover:text-white duration-200">Login</Link>
                    <Link href="/register" className="px-4 py-1.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 duration-200">Register</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;

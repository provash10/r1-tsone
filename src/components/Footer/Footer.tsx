import React from 'react';

type FooterProps = {
    brandName: string;
    email: string;
    phone: string;
    address: string;
};

const Footer: React.FC<FooterProps> = ({ brandName, email, phone, address }) => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">{brandName}</h2>
                    <p className="text-sm">Building modern web applications with clean UI and performance.</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Support</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Terms</a></li>
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Email: {email}</li>
                        <li>Phone: {phone}</li>
                        <li>{address}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm px-4">
                © {new Date().getFullYear()} {brandName}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

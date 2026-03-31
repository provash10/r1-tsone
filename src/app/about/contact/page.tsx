import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Contact</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Your message..."
                            className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 duration-200 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

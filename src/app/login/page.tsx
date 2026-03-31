import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
                <form className="space-y-4">
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
                        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 duration-200 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-slate-400 mt-4">
                    Don&apos;t have an account?{' '}
                    <a href="/register" className="text-sky-400 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

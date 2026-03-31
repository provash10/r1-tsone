'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Tutorial } from '@/components/Tutorials/tutorialsData';
import { motion, AnimatePresence } from 'framer-motion';
import { modalBackdropVariants, modalContentVariants, toastVariants } from '@/animations/framerVariants';

type Props = {
    tutorial: Tutorial;
};

type BookingForm = {
    name: string;
    email: string;
    date: string;
};

const CourseActions: React.FC<Props> = ({ tutorial }) => {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const inCart = isInCart(tutorial.id);

    const [showBooking, setShowBooking] = useState(false);
    const [form, setForm] = useState<BookingForm>({ name: '', email: '', date: '' });
    const [booked, setBooked] = useState(false);

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        setBooked(true);
        setShowBooking(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <button
                    onClick={() => inCart ? removeFromCart(tutorial.id) : addToCart(tutorial)}
                    className={`flex-1 py-2 font-semibold rounded-lg duration-200 cursor-pointer ${
                        inCart ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-sky-500 hover:bg-sky-600 text-white'
                    }`}
                >
                    {inCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                <button
                    onClick={() => { setShowBooking(true); setBooked(false); }}
                    className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg duration-200 cursor-pointer"
                >
                    Book Now
                </button>
            </div>

            <AnimatePresence>
                {booked && (
                    <motion.div
                        variants={toastVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-green-500/20 border border-green-500 text-green-400 text-sm px-4 py-3 rounded-lg"
                    >
                        Booking confirmed for <span className="font-semibold">{tutorial.title}</span>!
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showBooking && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
                        variants={modalBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setShowBooking(false)}
                    >
                        <motion.div
                            className="bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md"
                            variants={modalContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-bold text-white mb-1">Book Course</h3>
                            <p className="text-slate-400 text-sm mb-6">{tutorial.title} — <span className="text-green-400">${tutorial.fee}</span></p>
                            <form onSubmit={handleBook} className="space-y-4">
                                <div>
                                    <label className="block text-sm text-slate-300 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-300 mb-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="example@email.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-300 mb-1">Preferred Date</label>
                                    <input
                                        required
                                        type="date"
                                        value={form.date}
                                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                    />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="submit"
                                        className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg duration-200 cursor-pointer"
                                    >
                                        Confirm Booking
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowBooking(false)}
                                        className="flex-1 py-2 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg duration-200 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CourseActions;

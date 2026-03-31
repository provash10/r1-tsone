'use client';

import React, { createContext, useContext, useState } from 'react';
import { Tutorial } from '@/components/Tutorials/tutorialsData';

type CartContextType = {
    cart: Tutorial[];
    addToCart: (item: Tutorial) => void;
    removeFromCart: (id: number) => void;
    isInCart: (id: number) => boolean;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Tutorial[]>([]);

    const addToCart = (item: Tutorial) => {
        setCart((prev) => prev.find((c) => c.id === item.id) ? prev : [...prev, item]);
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((c) => c.id !== id));
    };

    const isInCart = (id: number) => cart.some((c) => c.id === id);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};

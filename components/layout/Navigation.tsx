"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, BRAND_NAME } from "@/lib/copy";

export const Navigation = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold tracking-widest text-white">
                    {BRAND_NAME}
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-background transition-all duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    showIcon?: boolean;
}

export const Button = ({ children, className, showIcon = true }: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group flex items-center gap-2",
                className
            )}
        >
            <div className="bg-white text-background px-8 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-300 group-hover:bg-accent">
                {children}
            </div>
            {showIcon && (
                <div className="bg-white text-background p-3 rounded-full transition-colors duration-300 group-hover:bg-accent">
                    <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            )}
        </motion.button>
    );
};

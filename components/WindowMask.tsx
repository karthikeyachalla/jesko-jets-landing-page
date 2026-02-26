"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface WindowMaskProps {
    progress: MotionValue<number>;
}

export const WindowMask = ({ progress }: WindowMaskProps) => {
    const scale = useTransform(progress, [0, 0.5, 1], [0.85, 1, 1.1]);
    const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
            {/* High-fidelity Window Frame SVG or Mask */}
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                <svg
                    viewBox="0 0 1000 1000"
                    className="w-full h-full opacity-60 drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M500,50 C250,50 50,150 50,500 C50,850 250,950 500,950 C750,950 950,850 950,500 C950,150 750,50 500,50 Z M500,100 C720,100 900,180 900,500 C900,820 720,900 500,900 C280,900 100,820 100,500 C100,180 280,100 500,100 Z"
                        fill="currentColor"
                        className="text-white/10"
                    />
                    {/* Inner Inner Shadow/Border for depth */}
                    <path
                        d="M500,120 C700,120 880,190 880,500 C880,810 700,880 500,880 C300,880 120,810 120,500 C120,190 300,120 500,120 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeOpacity="0.05"
                    />
                </svg>

                {/* Centered Brand on Window */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white/20 text-4xl tracking-[1em] uppercase font-light pointer-events-none">
                        Jesko Jets
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

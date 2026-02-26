"use client";

import { motion } from "framer-motion";
import { FOOTER_COPY } from "@/lib/copy";

export const Globe = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
            >
                <source src="/globe-loop.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-8">
                        GLOBAL REACH. <br />
                        <span className="text-accent">PERSONAL TOUCH.</span>
                    </h2>
                    <p className="text-xs md:text-sm tracking-[0.5em] text-accent uppercase mb-12">
                        {FOOTER_COPY.tagline}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24">
                        {[
                            { label: "Destinations", value: "200+" },
                            { label: "Fleet Size", value: "85" },
                            { label: "Safety Rating", value: "ARG/US Platin" },
                            { label: "Experience", value: "25yr+" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-[10px] tracking-widest text-accent uppercase font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

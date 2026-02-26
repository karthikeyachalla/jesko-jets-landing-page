"use client";

import { motion } from "framer-motion";
import { VISION_COPY } from "@/lib/copy";

export const Vision = () => {
    return (
        <section className="bg-background py-32 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                    {VISION_COPY.pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background p-12 md:p-24 flex flex-col justify-center border border-white/5"
                        >
                            <h3 className="text-2xl md:text-4xl font-bold tracking-widest text-white uppercase mb-8">
                                {pillar.title}
                            </h3>
                            <p className="text-sm md:text-base text-accent tracking-widest uppercase leading-relaxed font-light">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

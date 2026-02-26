"use client";

import { useRef, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { SEQUENCE_4_PATH, SEQUENCE_4_COUNT } from "@/lib/constants";
import { INIMITABLE_COPY, PLANE_COPY } from "@/lib/copy";

export const CombinedSequence = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { images, isLoaded } = useImagePreloader(SEQUENCE_4_PATH, SEQUENCE_4_COUNT);
    const progress = useScrollProgress(containerRef);

    // Text 1: "Crafting the Inimitable" - First section of the scroll
    const text1Opacity = useTransform(progress, [0.05, 0.15, 0.35, 0.45], [0, 1, 1, 0]);
    const text1Y = useTransform(progress, [0.05, 0.45], [100, -100]);

    // Text 2: "Beyond First Class" / "Aerodynamic Excellence" - Second section of the scroll
    const text2Opacity = useTransform(progress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
    const text2Y = useTransform(progress, [0.55, 0.95], [100, -100]);

    // Canvas overall opacity
    const canvasOpacity = useTransform(progress, [0, 0.05, 0.98, 1], [0, 1, 1, 0]);

    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (progressVal: number) => {
            const frameIndex = Math.min(
                SEQUENCE_4_COUNT - 1,
                Math.floor(progressVal * SEQUENCE_4_COUNT)
            );

            const img = images[frameIndex];
            if (!img) return;

            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const unsubscribe = progress.on("change", (latest) => {
            render(latest);
        });

        const handleResize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            render(progress.get());
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, isLoaded, progress]);

    return (
        <section ref={containerRef} className="relative h-[800vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.canvas
                    ref={canvasRef}
                    style={{ opacity: canvasOpacity }}
                    className="w-full h-full object-cover brightness-75"
                />

                {/* Text Overlay 1 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.4em] uppercase text-white">
                            {INIMITABLE_COPY.title}
                        </h2>
                    </motion.div>
                </div>

                {/* Text Overlay 2 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y }}
                        className="max-w-3xl text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-6 text-white uppercase">
                            {PLANE_COPY.title}
                        </h2>
                        <p className="text-sm md:text-base tracking-widest text-accent uppercase leading-relaxed font-light">
                            {PLANE_COPY.description}
                        </p>
                    </motion.div>
                </div>

                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
                        <div className="w-24 h-[1px] bg-white/20 relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-0 left-0 h-full bg-white"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { RefObject } from "react";

export const useScrollProgress = (ref: RefObject<HTMLElement>, offset: [any, any] = ["start start", "end end"]) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset,
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return smoothProgress;
};

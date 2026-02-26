"use client";

import { useState, useEffect } from "react";

export const useImagePreloader = (path: string, count: number, prefix: string = "ezgif-frame-") => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loadedCount = 0;
        const preloadedImages: HTMLImageElement[] = [];

        const pad = (num: number) => num.toString().padStart(3, "0");

        for (let i = 1; i <= count; i++) {
            const img = new Image();
            const src = `${path}/${prefix}${pad(i)}.jpg`;
            img.src = src;
            img.onload = () => {
                loadedCount++;
                setProgress(Math.floor((loadedCount / count) * 100));
                if (loadedCount === count) {
                    setIsLoaded(true);
                }
            };
            preloadedImages.push(img);
        }

        setImages(preloadedImages);
    }, [path, count, prefix]);

    return { images, isLoaded, progress };
};

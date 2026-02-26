"use client";

import { BRAND_NAME, FOOTER_COPY } from "@/lib/copy";

export const Footer = () => {
    return (
        <footer className="bg-background py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="text-2xl font-bold tracking-[0.3em] text-white">
                        {BRAND_NAME}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-[10px] tracking-widest text-accent uppercase">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>

                    <div className="text-[10px] tracking-widest text-white/40 uppercase">
                        {FOOTER_COPY.copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};

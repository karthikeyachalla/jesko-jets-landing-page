import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                foreground: "#ffffff",
                accent: "#A0A0A0",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "var(--font-geist-sans)", "sans-serif"],
            },
            letterSpacing: {
                widest: "0.12em",
                wider: "0.08em",
            },
        },
    },
    plugins: [],
};
export default config;

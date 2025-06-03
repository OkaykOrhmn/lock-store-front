// Example `tailwind.config.js` file

// Example `tailwind.config.js` file
import type { Config } from 'tailwindcss' with { 'resolution-mode': 'import' };

const config:Config={
    content: [
        './**/*.{js,ts,jsx,tsx}',
        './app/globals.css',
    ],
    darkMode: 'class', // changed from 'media' to 'class'
    theme:{
        extend:{
            colors:{
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                primaryAccent: "var(--color-primaryAccent)",
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
            }
        }
    },
    plugins:[
            require('@tailwindcss/line-clamp'),
    ]
};

export default config;
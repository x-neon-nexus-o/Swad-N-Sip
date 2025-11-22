/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#faf7f4',
                    100: '#f5ebe0',
                    200: '#e8d5c4',
                    300: '#d4b5a0',
                    400: '#bc8a6a',
                    500: '#a67c52',
                    600: '#8b6244',
                    700: '#6f4e37',
                    800: '#5d4128',
                    900: '#4a3320',
                },
                cream: {
                    50: '#fefdfb',
                    100: '#fdfaf5',
                    200: '#fbf5ed',
                    300: '#f8ede0',
                    400: '#f3e0c7',
                    500: '#ead5b8',
                },
                accent: {
                    pink: '#ffc4d6',
                    mint: '#b8e6d5',
                    peach: '#ffd4b8',
                    lavender: '#d4c5f9',
                }
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}

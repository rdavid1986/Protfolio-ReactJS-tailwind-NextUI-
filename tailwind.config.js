const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            width: {
                '4/5': '80%'
            },
            margin: {
                10: '2.5rem',
                12: '3rem'
            },
            colors: {
                customGray: "#B1AAA0"
            },
            backgroundImage: {
                'custom-bg-MonteGrandeBus': "url('/images/MonteGrandeBus.png')",
                'custom-bg-SistemaReservas': "url('/images/SistemaReservas.png')",
                'custom-bg-ReactEcommerce': "url('/images/ReactEcommerce.png')",
                'custom-bg-portfolio': "url('/images/reactPortfolio.png')"
            },
            minWidth: {
                0: '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                full: '100%'
            },
            height: {
                'screen-80': '80vh'
            },
            screens: {
                sm420: '420px'
            }
        }
    },
    darkMode: "class",
    plugins: [nextui()]
}

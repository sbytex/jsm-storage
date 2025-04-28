import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#EA6365"
                }
            }
        },
    },
    plugins: [],
}
export default config


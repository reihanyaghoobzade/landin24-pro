module.exports = {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-', // Avoid conflicts with Shopify's CSS. Make it whatever you want.
  content: [
    './**/*.{js,json,liquid}', // updated to include theme files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6823b2",
        
"secondary": "#e09d76",
        
"accent": "#d87224",
        
"neutral": "#352B36",
        
"base-100": "#F9FAFB",
        
"info": "#2B53DA",
        
"success": "#26CF9F",
        
"warning": "#B8840A",
        
"error": "#F1323B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#000000',    
        darkCard: '#1a0101',  
        primary: '#b91c1c',   
        accent: '#2563eb',    
        textMain: '#ffffff',  
        textSub: '#e5e7eb',   
        'maroon-900': '#4a0404', 
        'maroon-950': '#2a0000',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
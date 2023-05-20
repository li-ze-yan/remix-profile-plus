import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('/images/loginBg.png')",
      },
      boxShadow: {
        'login-submit': '0 20px 30px -10px',
        'login-hover': '0 10px 30px -10px',
      }
    },
  },
  plugins: [],
} satisfies Config


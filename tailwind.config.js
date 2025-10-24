/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#1A1A1A',
        accent: '#7A3FF2',
        accent2: '#5C2EBA',
        text: '#EAEAEA',
        muted: '#A0A0A0',
        glow: '#A86FF7'
      },
      boxShadow: {
        'purple-glow': '0 6px 30px rgba(122,63,242,0.14), 0 4px 8px rgba(90,30,180,0.08)',
      },
    },
  },
  plugins: [],
}
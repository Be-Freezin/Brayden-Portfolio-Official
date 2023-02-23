/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: { 
    fontFamily:{
        bitechalk:['BiteChalk'],
        bitechalknormal:['BiteChalkNormal'],
        handcraftChalk: ['HandcraftChalkRegular']
    },
    textColor:{
      skin:{
        base:'var(--text-primary)',
        accent: 'var(--text-accent)',
        inverted: 'var(--text-inverted)',
      },
    },
    backgroundColor:{
      skin:{
        bg: 'var(--color-bg)',
        muted: 'var(--color-muted)',
        accentdark: 'var(--color-accent)',
        glow: 'var(--color-glow)',
        accent: 'var(--color-accent-main)'
      }
    }
  },
  },
  plugins: [],
}

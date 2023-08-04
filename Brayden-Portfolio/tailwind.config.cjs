/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lordish: ['LordishRegular'],
				bitechalk: ['BiteChalk'],
				bitechalknormal: ['BiteChalkNormal'],
				handcraftChalk: ['HandcraftChalkRegular'],
				paragraph: ['Neuton'],
			},
			textColor: {
				skin: {
					base: 'var(--text-primary)',
					accent: 'var(--text-accent)',
					inverted: 'var(--text-inverted)',
				},
			},
			fontSize:{
				'10xl': '12rem'
			},
			backgroundColor: {
				skin: {
					bg: 'var(--color-bg)',
					trans: 'var(--color-bg-trans)',
					muted: 'var(--color-bg-muted)',
					lightMuted: 'var(--color-muted)',
					accentdark: 'var(--color-accent)',
					glow: 'var(--color-glow)',
					accent: 'var(--color-accent-main)',
				},
			},
			colors: {
				borderglow: 'var(--color-glow)',
				bordermain: 'var(--color-accent-main)',
				circleredglow: '#EF9475',
				mutedglow: '#454545',
				mainblack: '#191919',
				mutedtext: 'var(--color-muted-text)',
				gamehover: 'var(--color-hover-game)',
				beerhover: 'var(--color-hover-beer)',
				pchover: 'var(--color-hover-pc)',
				musichover: 'var(--color-hover-music)',
				codehover: 'var(--color-hover-code)',
			},
			boxShadow: {
				'0xl':
					'0 4px 20px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
			},

			animation: {
				morph: 'morph 3s ease-in-out infinite;',
			},
			inset: {
				84: '24.3rem',
				63: '15.96rem',
			},
		},
	},
	plugins: [],
}

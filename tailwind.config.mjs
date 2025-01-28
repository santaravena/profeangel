/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        primary: '#1E3A8A', // Azul Marino (Fondo oscuro, títulos)
        secondary: '#3B82F6', // Cian (Botones, enlaces)
        background: '#E5E7EB', // Gris Claro (Fondos)
        text: '#111827', // Negro Suave (Texto)
      },
		},
	},
	plugins: [
		require('daisyui'),
	],
}

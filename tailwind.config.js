import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      midnight: '#334054',
      breeze: '#3D87A3',
      dragonfly: '#FF9912',
      glass: '#BAE5FF',
      // ...
    }
  },
  plugins: [],
}

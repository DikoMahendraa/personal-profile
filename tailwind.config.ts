import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['primary-dark-soft']: '#0f1929',
        ['primary-dark']: '#0f1624',
      },
      spacing: {
        unset: 'unset',
      },

      screens: {
        xs: '426px',
        lg: '1126px',
        '3xl': '1876px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: false,
  },
}
export default config

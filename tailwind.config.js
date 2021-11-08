const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#111111',
          900: '#000',
        },
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      textColor: {
        DEFAULT: '#444',
      },
      borderColor: {
        DEFAULT: 'var(--accents-2)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(---shadow-3)',
        4: 'var(--shadow-4)',
        5: 'var(--shadow-5)',
        6: 'var(--shadow-6)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

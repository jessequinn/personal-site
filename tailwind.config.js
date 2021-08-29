const colors = require('tailwindcss/colors')

module.exports = {
    // mode: 'jit',
    purge: {
      enabled: true,
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
      ],
      options: {
        safelist: ['keen-slider', 'keen-slider__slide']
      }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ["Gilroy", "sans-serif"],
        'display': ["Gilroy", "sans-serif"],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
       'button': '0 1px 4px rgb(26 26 67 / 10%);',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '9rem',
        '10xl': '12rem'
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '102': '1.02',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      colors: {
        'primary-blue': '#609BFE',
        // 'primary-blue': '#4273A5',
        'light-blue': '#E5EFFF',
        'black-blue': '#272445',
        'text-grey': '#65677C',
        'light-grey': '#FAFAFA',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        green: colors.green,
        blue: colors.blue,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        purple: colors.violet
      },
      fill: theme => ({
        'primary-blue': theme('colors.primary-blue'),
        black: colors.black,
        white: colors.white,
        green: colors.green,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber
      }),
      extend: {
        zIndex: {
          '-10': '-10'
        },
        height: theme => ({
          "lg": "30rem",
          "xl": "35rem",
          "2xl": "40rem",
          "3xl": "45rem",
        }),
        gridTemplateColumns: {
          'footer': '18rem repeat(4, auto)',
        }
      },
      screens: {
        'sm': '641px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1281px',
        '2xl': '1537px',
      }
    },
    variants: {
      extend: {
        filter: ['hover', 'focus'],
        scale: ['group-hover']
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio')
    ],
}
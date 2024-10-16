/** @type { import('tailwindcss').Config } */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'var(--transparent, transparent)',
      current: 'var(--current, currentColor)',
      white: 'var(--white, #ffffff)',
      black: 'var(--black, #000000)',
      gray: {
        50: 'var(--gray-50, #fafafa)',
        100: 'var(--gray-100, #f4f5f5)',
        200: 'var(--gray-200, #ecedee)',
        300: 'var(--gray-300, #e4e5e7)',
        400: 'var(--gray-400, #d6d8db)',
        500: 'var(--gray-500, #bbbfc3)',
        600: 'var(--gray-600, #93989f)',
        700: 'var(--gray-700, #6d7278)',
        800: 'var(--gray-800, #53565a)',
        900: 'var(--gray-900, #27292a)',
      },
      orange: {
        50: 'var(--orange-50, #fff8f5)',
        100: 'var(--orange-100, #fff4f0)',
        200: 'var(--orange-200, #ffe6db)',
        300: 'var(--orange-300, #ffb899)',
        400: 'var(--orange-400, #ff7233)',
        500: 'var(--orange-500, #ff4f00)',
        600: 'var(--orange-600, #d64200)',
        700: 'var(--orange-700, #b53800)',
        800: 'var(--orange-800, #992f00)',
        900: 'var(--orange-900, #8c2b00)',
      },
      red: {
        50: 'var(--red-50, #fef5f5)',
        100: 'var(--red-100, #fde8e9)',
        200: 'var(--red-200, #f9c7c8)',
        300: 'var(--red-300, #f38e92)',
        400: 'var(--red-400, #eb4b51)',
        500: 'var(--red-500, #e61e25)',
        600: 'var(--red-600, #d11b22)',
        700: 'var(--red-700, #a3151a)',
        800: 'var(--red-800, #8a0f14)',
        900: 'var(--red-900, #610d10)',
      },
      yellow: {
        50: 'var(--yellow-50, #fffcf5)',
        100: 'var(--yellow-100, #fff1d1)',
        200: 'var(--yellow-200, #ffe29d)',
        300: 'var(--yellow-300, #fed370)',
        400: 'var(--yellow-400, #fecb55)',
        500: 'var(--yellow-500, #febe2a)',
        600: 'var(--yellow-600, #e7ad26)',
        700: 'var(--yellow-700, #b4871e)',
        800: 'var(--yellow-800, #8c6917)',
        900: 'var(--yellow-900, #6b5012)',
      },
      blue: {
        50: 'var(--blue-50, #f2f6fc)',
        100: 'var(--blue-100, #e9f0fb)',
        200: 'var(--blue-200, #c6d7f6)',
        300: 'var(--blue-300, #719dea)',
        400: 'var(--blue-400, #4d7fd6)',
        500: 'var(--blue-500, #215fcc)',
        600: 'var(--blue-600, #1e56ba)',
        700: 'var(--blue-700, #174391)',
        800: 'var(--blue-800, #123778)',
        900: 'var(--blue-900, #0e2856)',
      },
      green: {
        50: 'var(--green-50, #f3fbf5)',
        100: 'var(--green-100, #e5f6e8)',
        200: 'var(--green-200, #c7ebcf)',
        300: 'var(--green-300, #a5dfb2)',
        400: 'var(--green-400, #84d396)',
        500: 'var(--green-500, #48bd62)',
        600: 'var(--green-600, #42ac59)',
        700: 'var(--green-700, #338646)',
        800: 'var(--green-800, #286836)',
        900: 'var(--green-900, #1e4f29)',
      },
    },
    extend: {},
  },
  plugins: [],
};

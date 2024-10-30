/** @type { import('tailwindcss').Config } */
export default {
  content: ['./index.html', './src/**/*.tsx', './lib/**/*.tsx'],
  theme: {
    colors: {
      primary: {
        50: 'var(--primary-50, #f3fbf5)',
        100: 'var(--primary-100, #e5f6e8)',
        200: 'var(--primary-200, #c7ebcf)',
        300: 'var(--primary-300, #a5dfb2)',
        400: 'var(--primary-400, #84d396)',
        500: 'var(--primary-500, #48bd62)',
        600: 'var(--primary-600, #42ac59)',
        700: 'var(--primary-700, #338646)',
        800: 'var(--primary-800, #286836)',
        900: 'var(--primary-900, #1e4f29)',
      },
      secondary: {
        50: 'var(--secondary-50, #fdf4fb)',
        100: 'var(--secondary-100, #fbe8f7)',
        200: 'var(--secondary-200, #f6c5ec)',
        300: 'var(--secondary-300, #f093dc)',
        400: 'var(--secondary-400, #e75ac5)',
        500: 'var(--secondary-500, #dd22ae)',
        600: 'var(--secondary-600, #c81f9d)',
        700: 'var(--secondary-700, #9e197a)',
        800: 'var(--secondary-800, #7b145f)',
        900: 'var(--secondary-900, #590f46)',
      },
      tertiary: {
        50: 'var(--tertiary-50, #fafafa)',
        100: 'var(--tertiary-100, #f4f5f5)',
        200: 'var(--tertiary-200, #ecedee)',
        300: 'var(--tertiary-300, #e4e5e7)',
        400: 'var(--tertiary-400, #d6d8db)',
        500: 'var(--tertiary-500, #bbbfc3)',
        600: 'var(--tertiary-600, #93989f)',
        700: 'var(--tertiary-700, #6d7278)',
        800: 'var(--tertiary-800, #53565a)',
        900: 'var(--tertiary-900, #27292a)',
      },
      warning: {
        50: 'var(--warning-50, #fffcf5)',
        100: 'var(--warning-100, #fff1d1)',
        200: 'var(--warning-200, #ffe29d)',
        300: 'var(--warning-300, #fed370)',
        400: 'var(--warning-400, #fecb55)',
        500: 'var(--warning-500, #febe2a)',
        600: 'var(--warning-600, #e7ad26)',
        700: 'var(--warning-700, #b4871e)',
        800: 'var(--warning-800, #8c6917)',
        900: 'var(--warning-900, #6b5012)',
      },
      info: {
        50: 'var(--info-50, #f2f6fc)',
        100: 'var(--info-100, #e9f0fb)',
        200: 'var(--info-200, #c6d7f6)',
        300: 'var(--info-300, #719dea)',
        400: 'var(--info-400, #4d7fd6)',
        500: 'var(--info-500, #215fcc)',
        600: 'var(--info-600, #1e56ba)',
        700: 'var(--info-700, #174391)',
        800: 'var(--info-800, #123778)',
        900: 'var(--info-900, #0e2856)',
      },
      error: {
        50: 'var(--error-50, #fef5f5)',
        100: 'var(--error-100, #fde8e9)',
        200: 'var(--error-200, #f9c7c8)',
        300: 'var(--error-300, #f38e92)',
        400: 'var(--error-400, #eb4b51)',
        500: 'var(--error-500, #e61e25)',
        600: 'var(--error-600, #d11b22)',
        700: 'var(--error-700, #a3151a)',
        800: 'var(--error-800, #8a0f14)',
        900: 'var(--error-900, #610d10)',
      },
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
      slate: {
        50: 'var(--slate-50, #f8fafc)',
        100: 'var(--slate-100, #f1f5f9)',
        200: 'var(--slate-200, #e2e8f0)',
        300: 'var(--slate-300, #cbd5e1)',
        400: 'var(--slate-400, #94a3b8)',
        500: 'var(--slate-500, #64748b)',
        600: 'var(--slate-600, #475569)',
        700: 'var(--slate-700, #334155)',
        800: 'var(--slate-800, #1e293b)',
        900: 'var(--slate-900, #0f172a)',
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
      purple: {
        50: 'var(--purple-50, #faf5fe)',
        100: 'var(--purple-100, #f3e9fd)',
        200: 'var(--purple-200, #e0c9fa)',
        300: 'var(--purple-300, #c49ef5)',
        400: 'var(--purple-400, #a871ef)',
        500: 'var(--purple-500, #8c47e8)',
        600: 'var(--purple-600, #7c40d1)',
        700: 'var(--purple-700, #6333a3)',
        800: 'var(--purple-800, #4d2780)',
        900: 'var(--purple-900, #371b5c)',
      },
      fuchsia: {
        50: 'var(--fuchsia-50, #fdf4fb)',
        100: 'var(--fuchsia-100, #fbe8f7)',
        200: 'var(--fuchsia-200, #f6c5ec)',
        300: 'var(--fuchsia-300, #f093dc)',
        400: 'var(--fuchsia-400, #e75ac5)',
        500: 'var(--fuchsia-500, #dd22ae)',
        600: 'var(--fuchsia-600, #c81f9d)',
        700: 'var(--fuchsia-700, #9e197a)',
        800: 'var(--fuchsia-800, #7b145f)',
        900: 'var(--fuchsia-900, #590f46)',
      },
      pink: {
        50: 'var(--pink-50, #fff5f8)',
        100: 'var(--pink-100, #ffebf2)',
        200: 'var(--pink-200, #ffccdf)',
        300: 'var(--pink-300, #ff99be)',
        400: 'var(--pink-400, #ff669e)',
        500: 'var(--pink-500, #ff337e)',
        600: 'var(--pink-600, #e62e71)',
        700: 'var(--pink-700, #b42459)',
        800: 'var(--pink-800, #8a1c45)',
        900: 'var(--pink-900, #61142f)',
      },
      aqua: {
        50: 'var(--aqua-50, #f5fcfc)',
        100: 'var(--aqua-100, #e6f8f8)',
        200: 'var(--aqua-200, #c3eded)',
        300: 'var(--aqua-300, #8adada)',
        400: 'var(--aqua-400, #53c7c7)',
        500: 'var(--aqua-500, #1db5b5)',
        600: 'var(--aqua-600, #1aa3a3)',
        700: 'var(--aqua-700, #148282)',
        800: 'var(--aqua-800, #0f6262)',
        900: 'var(--aqua-900, #0a4545)',
      },
    },
    extend: {},
  },
  plugins: [],
};

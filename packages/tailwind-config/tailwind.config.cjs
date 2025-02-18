/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      typography: {
        base: {
          css: {
            color: 'var(--neutral-base)',
            a: {
              color: 'var(--primary-base)',
              '&:hover': {
                color: 'var(--primary-strong)',
              },
            },
          },
        }
      },
      colors:{
        primary: {
          softer: 'var(--primary-softer)',
          soft: 'var(--primary-soft)',
          base: 'var(--primary-base)',
          strong: 'var(--primary-strong)',
          stronger: 'var(--primary-stronger)',
        },
        neutral:{
          softest: 'var(--neutral-softest)',
          softer: 'var(--neutral-softer)',
          soft: 'var(--neutral-soft)',
          base: 'var(--neutral-base)',
          strong: 'var(--neutral-strong)',
          stronger: 'var(--neutral-stronger)',
          strongest: 'var(--neutral-strongest)',    
        },

        destructive: {
          softer: 'var(--destructive-softer)',
          soft: 'var(--destructive-soft)',
          base: 'var(--destructive-base)',
        },

        success: {
          soft: 'var(--success-soft)',
          base: 'var(--success-base)',
        },

        warning: {
          soft: 'var(--warning-soft)',
          base: 'var(--warning-base)',
        },

        info: {
          soft: 'var(--info-soft)',
          base: 'var(--info-base)',
        },

        error:{
          soft: 'var(--error-soft)',
          base: 'var(--error-base)',
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-react-aria-components'),
  ],
  // safelist: [
  //   {
  //     pattern: /react-aria-.+/,
  //   },
  // ],
}

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./**/*.html",
      "./*.html",
      "./**/*.js",
      "./*.js",
      "./**/*.svelte",
      "./*.svelte",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-bullets': theme('colors.black'),
          // these customizations are explained here https://youtu.be/-FzemNMcOGs
          blockquote: {
            borderLeft: '3px solid red',
            fontSize: 'inherit',
            fontStyle: 'inherit',
            fontWeight: 'medium'
          },
          'blockquote p:first-of-type::before': {
            content: ''
          },
          'blockquote p:last-of-type::after': {
            content: ''
          },

          'code::before': false,
          'code::after': false,
          code: {
            'border-radius': '0.25rem',
            padding: '0.15rem 0.3rem',
            borderWidth: '2px',
            borderColor: 'rgba(0,0,0,0.1)'
          },
          pre: {
            'border-radius': '0rem',
          },
          'a:hover': {
            color: '#31cdce !important',
            textDecoration: 'underline !important'
          },
          a: {
            color: '#2071ad',
            textDecoration: 'none'
          },
          'a code': {
            color: 'unset'
          },
          table: {
            overflow: 'hidden'
          },
          'li, ul, ol': {
            margin: 0
          },
          'li > img': {
            margin: 0,
            display: 'inline'
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-body)'
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-body)'
          },
          'ul > li > p': {
            marginTop: 0,
            marginBottom: 0,
          },
        }
      }
    }),
    extend: {
      colors: {
        'main': '#FF3E29',
        'second': '#47019d',
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        "55": "55rem",
      },
      opacity: {
        "80": ".8",
      },
      zIndex: {
        "2": 2,
        "3": 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        "48": "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};

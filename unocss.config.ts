import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  rules: [
    [
      'font-monument',
      {
        'font-family': 'Monument Extended',
        'font-weight': 400,
        'font-style': 'normal',
      },
    ],
    [
      'font-montserrat',
      {
        'font-family': 'Montserrat, sans-serif',
        'font-weight': 500,
        'font-style': 'normal',
      },
    ],
    [
      'font-notosans',
      { 'font-family': 'Noto Sans TC', 'font-style': 'normal' },
    ],
    [
      'font-pilot',
      {
        'font-family': 'Pilot Command Italic',
        'font-weight': 400,
        'font-style': 'italic',
      },
    ],
  ],
  theme: {
    colors: {
      neutral: {
        1: '#FFFFFF', // class="bg-neutral-1"
        2: '#858993',
        3: '#151F3F',
        4: '#0E1835',
        5: '#06102B',
        6: '#000000',
      },
      primary: {
        1: '#9DA4FF',
        2: '#C4C8FF',
        3: '#6E77E9',
      },
      green: {
        1: '#55FFAD',
      },
      yellow: {
        1: '#FFE34E',
        2: '#FFF385',
      },
    },
    breakpoints: {
      sm: '651px',
      md: '769px',
      lg: '981px',
      xl: '1105px',
      x2l: '1185px',
    },
    boxShadow: {
      white: ' 0px 0px 10px rgba(255, 255, 255, 0.6);',
      green: '0px 0px 10px rgba(85, 255, 173, 0.6);',
      purple: '0px 0px 10px rgba(157, 164, 255, 0.6);',
      yellow: ' 0px 0px 10px rgba(255, 243, 133, 0.6);',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

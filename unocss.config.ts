import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
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
    ['font-monument', { 'font-family': 'Monument Extended', 'font-weight': 400, 'font-style': 'normal' }],
    ['font-montserrat', { 'font-family': 'Montserrat, sans-serif', 'font-weight': 500, 'font-style': 'normal' }],
    ['font-notosans', { 'font-family': 'Noto Sans TC', 'font-style': 'normal' }],
    ['font-pilot', { 'font-family': 'Pilot Command Italic', 'font-weight': 400, 'font-style': 'italic' }],
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})

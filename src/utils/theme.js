const colorPalette = {
  accent: {
    darkGray: 'hsl(0, 0%, 17%)',
    foggy: 'hsl(49, 12%, 83%)',
    lightGray: 'hsl(0, 0%, 80%)',
    mauve: 'hsl(284, 28%, 21%)',
    mulberry: 'hsl(295, 37%, 12%)',
    ralme: 'hsl(0, 0%, 46%)',
  },

  core: {
    alizarin: 'hsl(0, 86%, 55%)',
    amethyst: 'hsl(47, 31%, 94%)',
    narce: 'hsl(48, 97%, 85%)',
    periwinkle: 'hsl(297, 19%, 44%)',
  },

  social: {
    facebook: 'hsl(221, 44%, 48%)',
    twitter: 'hsl(196, 100%, 46%)',
  },

  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  clear: 'transparent',
};

const color = {
  status: {
    danger: colorPalette.core.alizarin,
    info: colorPalette.core.periwinkle,
    warning: colorPalette.core.narce,
  },

  focus: colorPalette.core.periwinkle,

  inputBackground: colorPalette.white,
  inputBorder: colorPalette.lightGray,

  textLink: colorPalette.core.periwinkle,
  textLinkActive: colorPalette.core.periwinkle,
  textLinkHover: colorPalette.core.periwinkle,
  textDisabled: colorPalette.core.ralme,
  textMutedLarge: colorPalette.core.ralme,
  textPlaceholder: colorPalette.core.ralme,
};

const font = {
  abrilFontFamily:
    'Abril Fatface, Impact, fantasy, Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif	',
  defaultFontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial',
  playfairFontFamily: 'Playfair Display, serif',
  robotoFontFamily:
    'Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif',
  lineHeight: {
    title1: 52,
    title2: 36,
    title3: 30,
    large: 26,
    regular: 22,
    small: 18,
  },
  size: {
    title1: 46,
    title2: 32,
    title3: 24,
    large: 18,
    regular: 16,
    small: 14,
  },
};

const theme = {
  color: {
    ...colorPalette,
    ...color,
  },
  font,
};

export default theme;

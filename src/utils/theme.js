import { lighten } from 'polished';

const brand = {
  primary: '',
  secondary: '',
};

const colors = {
  accent: 'hsla(297, 19%, 44%, 1)',
  alert: 'hsla(0, 70%, 50%, 0.75)',
  background: 'hsla(47, 31%, 94%, 1)',
  delete: 'hsla(0, 100%, 80%, 0.75',
  focus: () => colors.accent,
  link: () => colors.offset,
  offset: 'hsla(284, 28%, 21%, 1)',
  text: () => colors.neutralDarkest,

  neutral: 'hsla(230, 8%, 60%, 1)',
  neutralDarkest: () => lighten(0.16, colors.neutral),
  neutralDarker: () => lighten(0.32, colors.neutral),
  neutralDark: () => lighten(0.42, colors.neutral),
  neutralLight: () => lighten(0.7, colors.neutral),
  neutralLighter: () => lighten(0.8, colors.neutral),
  neutralLightest: () => lighten(0.88, colors.neutral),
};

const theme = {
  brand,
  colors,
};

export default theme;

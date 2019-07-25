import { css } from 'styled-components';

export const breakpoints = {
  xs: 420,
  sm: 670,
  md: 880,
  lg: 1040,
  xl: 1160,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

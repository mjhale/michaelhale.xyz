import styled from 'styled-components';

import theme from 'src/utils/theme';
import { breakpoints, media } from 'src/utils/media';

import Link from 'src/components/Link';

const StyledNavLink = styled(Link)`
  display: block;
  font-display: swap;
  font-family: ${theme.font.robotoFontFamily};
  font-size: 0.9rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  transition: color 0.1s linear;

  @media (max-width: ${breakpoints.md}px) {
    border-bottom: 1px solid ${theme.color.accent.lightGray};
    color: ${theme.color.accent.ralme};
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  ${media.md`
    color: ${theme.color.core.amethyst};
    text-transform: lowercase;

    &:hover {
      color: ${theme.color.white};
    }
  `}
`;

export default StyledNavLink;

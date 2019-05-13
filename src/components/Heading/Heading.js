import styled from 'styled-components';

import theme from 'src/utils/theme';

const StyledHeading = styled.h1`
  font-display: swap;
  font-family: ${theme.font.playfairFontFamily};
  font-size: 1.675rem;
  letter-spacing: 0.025rem;
  text-transform: lowercase;
`;

export default StyledHeading;

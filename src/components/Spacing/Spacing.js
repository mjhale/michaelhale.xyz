import PropTypes from 'prop-types';
import React from 'react';

import styled, { css } from 'styled-componets';

import theme from 'src/utils/theme';

const StyledSpacing = styled.div`
  margin-bottom: ${({ computedBottom }) => computedBottom * theme.unit};
  margin-left: ${({ computedLeft }) => computedLeft * theme.unit};
  margin-right: ${({ computedRight }) => computedRight * theme.unit};
  margin-top: ${({ computedTop }) => computedTop * theme.unit};

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `}

  ${({ textInline }) =>
    textInline &&
    css`
      display: inline;
    `}
`;

const Spacing = props => {
  const {
    bottom,
    children,
    horizontal,
    inline,
    left,
    right,
    textInline,
    top,
    vertical,
  } = props;

  const computedBottom = bottom != null ? bottom : vertical;
  const computedLeft = left != null ? left : horizontal;
  const computedRight = right != null ? right : horizontal;
  const computedTop = top != null ? top : vertical;

  return (
    <StyledSpacing
      computedBottom={computedBottom}
      computedLeft={computedLeft}
      computedRight={computedRight}
      computedTop={computedTop}
      inline={inline}
      textInline={textInline}
    >
      {children}
    </StyledSpacing>
  );
};

Spacing.propTypes = {
  bottom: PropTypes.number,
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.number,
  inline: PropTypes.bool,
  left: PropTypes.number,
  right: PropTypes.number,
  textInline: PropTypes.bool,
  top: PropTypes.number,
  vertical: PropTypes.number,
};

Spacing.defaultProps = {
  bottom: null,
  horizontal: null,
  inline: false,
  left: null,
  right: null,
  textInline: false,
  top: null,
  vertical: null,
};

export default Spacing;

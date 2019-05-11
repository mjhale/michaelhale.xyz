import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSkipNavLink = styled.a`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &:focus {
    background: white;
    clip: auto;
    height: auto;
    left: 10px;
    padding: 1rem;
    position: fixed;
    top: 10px;
    width: auto;
    z-index: 1;
  }
`;

const SkipNavLink = ({ children, contentId, ...props }) => (
  <StyledSkipNavLink {...props} href={`#${contentId}`}>
    {children}
  </StyledSkipNavLink>
);

SkipNavLink.defaultProps = {
  children: 'Skip to Content',
};

SkipNavLink.propTypes = {
  contentId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SkipNavLink;

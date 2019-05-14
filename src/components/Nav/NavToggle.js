import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';
import { breakpoints, media } from 'src/utils/media';

const StyledNavToggle = styled.button`
  @media (max-width: ${breakpoints.md}px) {
    background: none;
    border: none;
    cursor: pointer;
    display: block;
    height: 2rem;
    opacity: 0.8;
    padding: 0 0.5rem;
    position: relative;
    width: 2.15rem;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  ${media.md`
    display: none;
  `}
`;

const StyledNavToggleText = styled.span`
  left: 0.6rem;
  position: absolute;
  top: 1rem;
  transform: ${props => (!props.isMenuOverlayOpen ? 'none' : 'rotate(45deg)')};
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.5, 0.05, 0.7, 0.2);

  &,
  &::after,
  &::before {
    background-color: ${theme.color.white};
    display: block;
    height: 2px;
    transition: ${props =>
      !props.isMenuOverlayOpen ? 'none' : 'transform 1s ease'};
    transition-timing-function: ${props =>
      !props.isMenuOverlayOpen ? 'none' : 'cubic-bezier(0.2, 0.6, 0.4, 1)'};
    width: 1rem;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
  }

  &::after {
    bottom: ${props => (!props.isMenuOverlayOpen ? '0.35rem' : '0')};
    transform: ${props =>
      !props.isMenuOverlayOpen ? 'none' : 'rotate(-90deg)'};
    transition: bottom 0.1s 0.2s ease,
      transform 0.1s cubic-bezier(0.5, 0.05, 0.7, 0.2);
  }

  &::before {
    top: ${props => (!props.isMenuOverlayOpen ? '0.35rem' : '0')};
    transition: top 0.1s 0.2s ease, opacity 0.1s ease;
  }
`;

const NavToggle = ({ isMenuOverlayOpen, setIsMenuOverlayOpen }) => {
  return (
    <StyledNavToggle
      aria-controls="nav-list"
      aria-expanded={isMenuOverlayOpen}
      isMenuOverlayOpen={isMenuOverlayOpen}
      onClick={() => setIsMenuOverlayOpen(!isMenuOverlayOpen)}
    >
      <StyledNavToggleText isMenuOverlayOpen={isMenuOverlayOpen} />
    </StyledNavToggle>
  );
};

NavToggle.propTypes = {
  isMenuOverlayOpen: PropTypes.bool,
  setIsMenuOverlayOpen: PropTypes.func.isRequired,
};

export default NavToggle;

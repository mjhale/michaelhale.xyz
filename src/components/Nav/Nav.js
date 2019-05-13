import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from 'src/utils/theme';
import useWindowWidth from 'src/hooks/windowWidth';
import { breakpoints, media } from 'src/utils/media';

const StyledNavItem = styled.li`
  line-height: 1.4;
  margin-bottom: 1.5rem;

  ${media.md`
    margin-bottom: 0;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  `}
`;

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

const StyledNavList = styled.ul`
  display: ${props => (props.isNavExpanded ? 'flex' : 'none')};
  height: 100%;
  list-style: none;
  margin: 0;

  @media (max-width: ${breakpoints.md}px) {
    background-color: ${theme.color.core.amethyst};
    flex-direction: column;
    left: 0;
    padding: 2.25rem;
    position: absolute;
    top: calc(5rem + 10px);
    width: 100%;
    z-index: 20;
  }

  ${media.md`
    align-items: center;
    align-self: flex-end;
    flex-grow: 1;
  `}
`;

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
  transform: ${props => (!props.isNavExpanded ? 'none' : 'rotate(45deg)')};
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.5, 0.05, 0.7, 0.2);

  &,
  &::after,
  &::before {
    background-color: ${theme.color.white};
    display: block;
    height: 2px;
    transition: ${props =>
      !props.isNavExpanded ? 'none' : 'transform 1s ease'};
    transition-timing-function: ${props =>
      !props.isNavExpanded ? 'none' : 'cubic-bezier(0.2, 0.6, 0.4, 1)'};
    width: 1rem;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
  }

  &::after {
    bottom: ${props => (!props.isNavExpanded ? '0.35rem' : '0')};
    transform: ${props => (!props.isNavExpanded ? 'none' : 'rotate(-90deg)')};
    transition: bottom 0.1s 0.2s ease,
      transform 0.1s cubic-bezier(0.5, 0.05, 0.7, 0.2);
  }

  &::before {
    top: ${props => (!props.isNavExpanded ? '0.35rem' : '0')};
    transition: top 0.1s 0.2s ease, opacity 0.1s ease;
  }
`;

const NavToggle = ({ isNavExpanded, setisNavExpanded }) => {
  return (
    <StyledNavToggle
      aria-controls="nav-list"
      aria-expanded={isNavExpanded}
      isNavExpanded={isNavExpanded}
      onClick={() => setisNavExpanded(!isNavExpanded)}
    >
      <StyledNavToggleText isNavExpanded={isNavExpanded} />
    </StyledNavToggle>
  );
};

NavToggle.propTypes = {
  isNavExpanded: PropTypes.bool,
  setisNavExpanded: PropTypes.func.isRequired,
};

const Nav = () => {
  const [isNavExpanded, setisNavExpanded] = useState(null);

  let windowWidth = useWindowWidth();
  let isSmallDevice = windowWidth < breakpoints.md;

  useEffect(() => {
    if (isSmallDevice) {
      setisNavExpanded(false);
    } else {
      setisNavExpanded(true);
    }
  }, [isSmallDevice]);

  return (
    <nav aria-label="Main">
      <NavToggle
        isNavExpanded={isNavExpanded}
        setisNavExpanded={setisNavExpanded}
      />
      <StyledNavList id="nav-list" isNavExpanded={isNavExpanded}>
        <StyledNavItem>
          <StyledNavLink to="/work/">Work</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/contact/">Contact</StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </nav>
  );
};

export default Nav;

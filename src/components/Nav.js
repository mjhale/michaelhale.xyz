import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import useWindowWidth from 'src/hooks/windowWidth';
import { breakpoints, media } from 'src/utils/media';

const StyledNavItem = styled.li`
  line-height: 1.4;
  margin-bottom: 0;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const StyledNavLink = styled(Link)`
  color: rgba(242, 238, 255, 0.93);
  font-display: swap;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: lowercase;
  text-rendering: optimizeLegibility;
  transition: color 0.1s linear;

  &:hover {
    color: #fff;
  }
`;

const StyledNavList = styled.ul`
  display: ${props => (props.isExpanded ? 'flex' : 'none')};
  list-style: none;
  margin: 0;

  ${media.md`
    align-items: center;
    align-self: flex-end;
    display: flex;
    flex-grow: 1;
  `}
`;

const StyledNavToggle = styled.button`
  display: ${props => (props.isExpanded ? 'none' : 'inline-block')};

  ${media.md`
    display: none;
  `}
`;

const NavToggle = ({ isExpanded, setIsExpanded }) => {
  return (
    <StyledNavToggle
      aria-expanded={isExpanded}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(true)}
    >
      Menu
    </StyledNavToggle>
  );
};

NavToggle.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  let windowWidth = useWindowWidth();
  let isSmallDevice = windowWidth <= breakpoints.sm;

  useEffect(() => {
    if (isSmallDevice) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [isSmallDevice]);

  return (
    <nav aria-label="Main">
      <NavToggle isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <StyledNavList isExpanded={isExpanded}>
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

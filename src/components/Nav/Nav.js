import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';
import useWindowWidth from 'src/hooks/windowWidth';
import { breakpoints, media } from 'src/utils/media';

import NavLink from 'src/components/Nav/NavLink';
import NavToggle from 'src/components/Nav/NavToggle';

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

const StyledNavList = styled.ul`
  display: ${props => (props.isMenuOverlayOpen ? 'flex' : 'none')};
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
    display: flex;
    flex-grow: 1;
  `}
`;

const Nav = () => {
  let windowWidth = useWindowWidth();
  let isSmallDevice = windowWidth < breakpoints.md;
  const [isMenuOverlayOpen, setIsMenuOverlayOpen] = useState(false);

  /* Disable overlay when transitioning between sm and md breakpoints */
  useEffect(() => {
    setIsMenuOverlayOpen(false);
  }, [isSmallDevice]);

  return (
    <nav aria-label="Main">
      <NavToggle
        isMenuOverlayOpen={isMenuOverlayOpen}
        setIsMenuOverlayOpen={setIsMenuOverlayOpen}
      />
      <StyledNavList id="nav-list" isMenuOverlayOpen={isMenuOverlayOpen}>
        <StyledNavItem>
          <NavLink href="/work/" onPress={() => setIsMenuOverlayOpen(false)}>
            Work
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink href="/contact/" onPress={() => setIsMenuOverlayOpen(false)}>
            Contact
          </NavLink>
        </StyledNavItem>
      </StyledNavList>
    </nav>
  );
};

export default Nav;

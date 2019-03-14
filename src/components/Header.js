import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from './Container';

const Header = styled.header`
  background: #825a84;
  margin-top: 10px;
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: space-between;
`;

const Logo = styled.h1`
  display: inline;
  font-family: 'Abril Fatface', cursive;
  font-weight: normal;
  font-size: 48px;
  font-style: normal;
  line-height: normal;
  margin: 0;
`;

const LogoLink = styled(Link)`
  color: #f5f3ec;
  text-decoration: none;
`;

const MenuToggle = styled.button`
  display: none;
`;

const NavItem = styled.li`
  line-height: 1.4;
  margin-bottom: 0;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: rgba(242, 238, 255, 0.93);
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

const NavList = styled.ul`
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-grow: 1;
  list-style: none;
  margin: 0;
`;

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <HeaderContainer>
      <Logo>
        <LogoLink to="/">{siteTitle}</LogoLink>
      </Logo>
      <nav aria-label="Main">
        <NavList>
          <MenuToggle aria-expanded="false">Menu</MenuToggle>
          <NavItem>
            <NavLink to="/portfolio/">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services/">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact/">Contact</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  </Header>
);

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default HeaderComponent;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { media } from 'src/utils/media';

import Nav from 'src/components/Nav';
import { Container } from 'src/components/Container';

const Header = styled.header`
  background: ${props => props.headerBackgroundColor};
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
  font-display: swap;
  font-family: 'Abril Fatface', cursive;
  font-weight: normal;
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
  margin: 0;

  ${media.md`
    font-size: 2.4rem;
  `}

  ${media.lg`
    font-size: 2.6rem;
  `}
`;

const LogoLink = styled(Link)`
  color: #f5f3ec;
  text-decoration: none;
`;

const HeaderComponent = ({ headerBackgroundColor, siteTitle }) => (
  <Header headerBackgroundColor={headerBackgroundColor}>
    <HeaderContainer>
      <Logo>
        <LogoLink to="/">{siteTitle}</LogoLink>
      </Logo>
      <Nav />
    </HeaderContainer>
  </Header>
);

HeaderComponent.propTypes = {
  headerBackgroundColor: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default HeaderComponent;

import React from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';

import { Container } from 'src/components/Container';

const StyledCopyright = styled.div``;

const StyledFooter = styled.footer`
  align-items: center;
  color: ${theme.colors.background};
  display: flex;
  flex-grow: 1;
  font-size: 0.8rem;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const StyledLink = styled.li`
  margin-bottom: 0;
  padding-left: 0.75rem;
`;

const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const Footer = () => (
  <Container>
    <StyledFooter>
      <StyledCopyright>© 2019 Michael Hale</StyledCopyright>
      <StyledLinks>
        <StyledLink>GitHub</StyledLink>
        <StyledLink>LinkedIn</StyledLink>
      </StyledLinks>
    </StyledFooter>
  </Container>
);

export default Footer;

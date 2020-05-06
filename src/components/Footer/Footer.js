import React from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';

import Container from 'src/components/Container';
import Link from 'src/components/Link';

const StyledCopyright = styled.div``;

const StyledFooter = styled.footer`
  align-items: center;
  color: ${theme.color.core.amethyst};
  display: flex;
  flex-grow: 1;
  font-size: 0.8rem;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${theme.color.core.amethyst};
  text-decoration: none;

  &:hover {
    color: ${theme.color.white};
  }
`;

const StyledLinkItem = styled.li`
  margin-bottom: 0;
  padding-left: 0.75rem;
`;

const StyledLinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const Footer = () => (
  <Container>
    <StyledFooter>
      <StyledCopyright>© 2020 Michael Hale</StyledCopyright>
      <StyledLinkList>
        <StyledLinkItem>
          <StyledLink
            href="https://github.com/mjhale"
            rel="noopener"
            target="_blank"
          >
            GitHub
          </StyledLink>
        </StyledLinkItem>
        <StyledLinkItem>
          <StyledLink
            href="https://www.linkedin.com/in/mjhale/"
            rel="noopener"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
        </StyledLinkItem>
      </StyledLinkList>
    </StyledFooter>
  </Container>
);

export default Footer;

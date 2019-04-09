import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import SkipNavLink from 'src/components/SkipNavLink';
import { Container } from 'src/components/Container';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bodyBackgroundColor};
    font-feature-settings: "pnum";
    -webkit-font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
  }
`;

const StyledChildren = styled.main`
  background-color: #f5f3ec;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
`;

const Layout = ({ bodyBackgroundColor, children, headerBackgroundColor }) => {
  const siteMetaData = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle bodyBackgroundColor={bodyBackgroundColor} />
      <Helmet
        title={siteMetaData.site.siteMetadata.title}
        meta={[{ name: 'description', content: 'Sample' }]}
      >
        <html lang="en" />
      </Helmet>
      <SkipNavLink contentId="content" />
      <Header
        headerBackgroundColor={headerBackgroundColor}
        siteTitle={siteMetaData.site.siteMetadata.title}
      />
      <StyledChildren id="content">
        <Container>{children}</Container>
      </StyledChildren>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  bodyBackgroundColor: '#3c2644',
  headerBackgroundColor: '#825a84',
};

Layout.propTypes = {
  bodyBackgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  headerBackgroundColor: PropTypes.string,
};

export default Layout;

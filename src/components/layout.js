import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Header from './Header';
import { Container } from './Container';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F3EC;
    font-feature-settings: "pnum";
    -webkit-font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
  }
`;

const ChildrenContainer = styled(Container)`
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ChildrenContainer>{children}</ChildrenContainer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

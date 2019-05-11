import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Introduction from 'src/components/Homepage/Introduction';
import Layout from 'src/components/Layout';
import ProjectCardList from 'src/components/Homepage/ProjectCardList';

const IndexPage = ({ data }) => {
  const { recentWork } = data;

  return (
    <Layout>
      <Introduction />
      <ProjectCardList projects={recentWork} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    recentWork: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    recentWork: allMdx(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            coverImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            path
            summary
            technologies {
              iconImage {
                publicURL
              }
              id
              title
            }
            title
          }
        }
      }
    }
  }
`;

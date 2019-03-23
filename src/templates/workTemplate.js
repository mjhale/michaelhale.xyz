import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const WorkTemplate = ({ data }) => {
  const {
    project: { frontmatter, html },
  } = data;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

WorkTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        coverImage: PropTypes.object,
        date: PropTypes.string,
        path: PropTypes.string,
        summary: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }),
};

export default WorkTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        coverImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
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
`;

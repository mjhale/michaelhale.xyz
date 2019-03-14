import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const WorkTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

WorkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

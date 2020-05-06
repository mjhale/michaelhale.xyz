import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'src/components/Layout';
import Link from 'src/components/Link';
import ProjectList from 'src/components/Work/ProjectList';

const WorkPage = ({ data }) => {
  const { projects } = data;

  return (
    <Layout>
      <Helmet>
        <title>Work and Projects</title>
        <meta
          name="description"
          content="Michael has worked with a wide range of companies on projects big and small, from consulting on design systems to implementing complete project revamps."
        />
      </Helmet>
      <h1>Work</h1>
      <p>
        Interested in working together?{' '}
        <Link href="/contact/">Get in touch.</Link>
      </p>

      <ProjectList projects={projects} />
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.object.isRequired,
  }).isRequired,
};

export default WorkPage;

export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/work/" } }
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
            style {
              screenshot_offset
              screenshot_shadow
            }
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

import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXTag } from '@mdx-js/tag';

import Layout from '../components/Layout';
import TechnologyIconList from '../components/TechnologyIconList';

const StyledScreenshot = styled.div`
  background-color: ${props => props.offset || 'transparent'};
  padding: 1.5rem;

  & p {
    margin: 0;
  }
`;

const ProjectDate = styled.p`
  color: #777;
  font-feature-settings: 'onum' 1;
  font-size: 0.9375rem;
  margin: 0;
`;

const WorkTemplate = ({ data }) => {
  const {
    project: {
      code: { body },
      frontmatter,
    },
  } = data;

  const mdxScope = {
    MDXTag: MDXTag,
    React: React,
    Screenshot: StyledScreenshot,
  };

  return (
    <Layout>
      <ProjectDate>{frontmatter.date}</ProjectDate>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.subtitle}</p>

      <p>{frontmatter.role}</p>

      <TechnologyIconList technologies={frontmatter.technologies} />

      <MDXRenderer scope={mdxScope} style={frontmatter.style}>
        {body}
      </MDXRenderer>
    </Layout>
  );
};

WorkTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      frontmatter: PropTypes.shape({
        coverImage: PropTypes.object,
        date: PropTypes.string,
        path: PropTypes.string,
        role: PropTypes.string,
        subtitle: PropTypes.string,
        summary: PropTypes.string,
        style: PropTypes.object,
        technologies: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
      }).isRequired,
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
};

export default WorkTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    project: mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
      }
      frontmatter {
        coverImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM, YYYY")
        path
        role
        style {
          screenshot_shadow
          screenshot_offset
        }
        subtitle
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

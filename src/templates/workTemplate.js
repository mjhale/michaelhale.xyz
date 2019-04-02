import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import TechnologyIconList from 'src/components/TechnologyIconList';

const StyledIconList = styled.div`
  margin: 0.435rem 0;
`;

const StyledProjectDate = styled.p`
  color: #777;
  font-feature-settings: 'onum' 1;
  font-size: 0.9375rem;
  margin: 0;
`;

const StyledProjectRole = styled.p`
  font-size: 0.9375rem;
  margin: 0.25rem 0;
`;

const StyledProjectTitle = styled.h1`
  font-size: 1.9375rem;
  line-height: 1.1;
  margin-bottom: 0.25rem;
`;

const StyledScreenshot = styled.div`
  background-color: ${props => props.offsetColor || 'transparent'};
  background-image: ${props =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-repeat: ${props =>
    props.backgroundImage ? 'repeat' : 'no-repeat'};
  margin-bottom: 1.45rem;
  overflow: hidden;
  padding: 2rem;

  & .gatsby-resp-image-wrapper {
    box-shadow: 0 0.5vw 2.5vw rgba(50, 50, 50, 0.15),
      0 2vw 4.75vw 1.25vw ${props => props.shadowColor || 'transparent'};
  }

  & .gatsby-resp-image-wrapper img {
    outline: 1px solid rgba(50, 50, 50, 0.15);
    outline-offset: -1px;
  }

  & p {
    margin: 0;
  }
`;

const WorkTemplate = ({ data }) => {
  const {
    fractalBackground,
    project: {
      code: { body },
      frontmatter,
    },
  } = data;

  const Screenshot = props => (
    <StyledScreenshot
      backgroundImage={fractalBackground.publicURL}
      {...props}
    />
  );

  const mdxScope = {
    Screenshot: Screenshot,
  };

  return (
    <Layout>
      <StyledProjectDate>{frontmatter.date}</StyledProjectDate>
      <StyledProjectTitle>{frontmatter.title}</StyledProjectTitle>
      <StyledProjectRole>{frontmatter.role}</StyledProjectRole>

      <StyledIconList>
        <TechnologyIconList technologies={frontmatter.technologies} />
      </StyledIconList>

      <MDXRenderer scope={mdxScope} style={frontmatter.style}>
        {body}
      </MDXRenderer>
    </Layout>
  );
};

WorkTemplate.propTypes = {
  data: PropTypes.shape({
    fractalBackground: PropTypes.object.isRequired,
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
    fractalBackground: file(relativePath: { eq: "fractal-noise.svg" }) {
      publicURL
    }
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

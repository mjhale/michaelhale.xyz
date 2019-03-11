import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const StyledHeading = styled.h1`
  font-family: 'Playfair Display', serif;
  text-transform: lowercase;
`;

const StyledSmallText = styled.span`
  font-family: 'Roboto', sans-serif;
`;

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  const { edges: technologies } = data.allTechnologiesYaml;

  return (
    <Layout>
      <StyledHeading>
        Featured <StyledSmallText>Projects</StyledSmallText>
      </StyledHeading>

      {projects.map(project => {
        const {
          coverImage,
          summary,
          technologyTags,
          title,
        } = project.node.frontmatter;
        const { id } = project.node;

        return (
          <ProjectCard
            coverImage={coverImage}
            key={id}
            title={title}
            summary={summary}
            technologies={technologies}
            technologyTags={technologyTags}
          />
        );
      })}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allTechnologiesYaml {
      edges {
        node {
          id
          title
          iconImage
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            coverImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
            summary
            technologyTags
          }
        }
      }
    }
  }
`;

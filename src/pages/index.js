import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const StyledAbout = styled.div``;

const StyledAboutSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledCity = styled.div`
  height: auto;
  mask-image: url(${props => props.mask || 'none'});
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-type: luminance;
  margin-left: 1.125rem;
  max-width: 320px;
  object-fit: cover;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-display: swap;
  font-family: 'Playfair Display', serif;
  font-size: 1.675rem;
  letter-spacing: 0.025rem;
  text-transform: lowercase;
`;

const StyledParagraph = styled.p`
  margin-bottom: 0.75rem;
`;

const StyledProjectCardList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const StyledProjectLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const StyledProjectsSection = styled.section`
  margin: 1.25rem 0;
`;

const StyledSmallText = styled.span`
  font-display: swap;
  font-family: 'Roboto', sans-serif;
  font-size: 1.525rem;
  font-weight: normal;
`;

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  const { edges: technologies } = data.allTechnologiesYaml;
  const { cityImage, cityMask } = data;

  return (
    <Layout>
      <StyledAboutSection>
        <StyledAbout>
          <StyledHeading>
            frontend <StyledSmallText>engineer</StyledSmallText>
          </StyledHeading>
          <StyledParagraph>
            Michael Hale is a frontend engineer and designer in Charlotte, N.C.
          </StyledParagraph>
          <StyledParagraph>
            He has experience with JavaScript, Elixir, and Ruby as well as
            React, Phoenix, and Rails. For more than ten years he has partnered
            with clients who share a commitment to creativity, integrity, and
            craft.
          </StyledParagraph>
        </StyledAbout>
        <StyledCity mask={cityMask.publicURL}>
          <Img
            alt="The skyline of Charlotte, NC on a sunny day."
            backgroundColor="#f7f5f6"
            fluid={cityImage.childImageSharp.fluid}
          />
        </StyledCity>
      </StyledAboutSection>

      <StyledProjectsSection>
        <StyledHeading>
          Recent <StyledSmallText>Work</StyledSmallText>
        </StyledHeading>

        <StyledProjectCardList>
          {projects.map(project => {
            const {
              coverImage,
              path,
              summary,
              technologyTags,
              title,
            } = project.node.frontmatter;
            const { id } = project.node;

            return (
              <StyledProjectLink key={id} to={path}>
                <ProjectCard
                  coverImage={coverImage}
                  title={title}
                  summary={summary}
                  technologies={technologies}
                  technologyTags={technologyTags}
                />
              </StyledProjectLink>
            );
          })}
        </StyledProjectCardList>
      </StyledProjectsSection>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
            coverImage {
              publicURL
              relativePath
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            summary
            technologyTags
          }
        }
      }
    }
    allTechnologiesYaml {
      edges {
        node {
          id
          title
          iconImage {
            publicURL
          }
        }
      }
    }
    cityImage: file(relativePath: { eq: "charlotte-skyline.jpg" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 252, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cityMask: file(relativePath: { eq: "brush-mask.svg" }) {
      publicURL
    }
  }
`;

import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import ProjectCard from 'src/components/ProjectCard';

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
  const { cityImage, cityMask, recentWork } = data;

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
          {recentWork.edges.map(({ node: { frontmatter: column } }, index) => (
            <StyledProjectLink key={index} to={column.path}>
              <ProjectCard
                coverImage={column.coverImage}
                title={column.title}
                summary={column.summary}
                technologies={column.technologies}
              />
            </StyledProjectLink>
          ))}
        </StyledProjectCardList>
      </StyledProjectsSection>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    cityImage: PropTypes.object.isRequired,
    cityMask: PropTypes.object.isRequired,
    recentWork: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
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

import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { media } from 'src/utils/media';

import Heading from 'src/components/Heading';
import HeadingSmalltext from 'src/components/Heading/HeadingSmalltext';

const StyledAbout = styled.div`
  padding-right: 2.15rem;
`;

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.sm`
    flex-direction: row;
  `}
`;

const StyledCity = styled.div`
  height: auto;
  mask-image: url(${props => props.mask || 'none'});
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-type: luminance;
  object-fit: cover;
  width: 100%;

  ${media.sm`
    max-width: 200px;
  `}

  ${media.md`
    max-width: 320px;
  `}

  & .gatsby-image-outer-wrapper,
  & .gatsby-image-wrapper {
    height: 100%;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 0.75rem;
`;

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query IntroductionQuery {
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
  `);

  return (
    <StyledAboutSection>
      <StyledAbout>
        <Heading>
          frontend <HeadingSmalltext>engineer</HeadingSmalltext>
        </Heading>
        <StyledParagraph>
          Michael Hale is a frontend engineer and designer in Charlotte, N.C.
        </StyledParagraph>
        <StyledParagraph>
          He has experience with JavaScript, Elixir, and Ruby as well as React,
          Phoenix, and Rails. For more than ten years he has partnered with
          clients who share a commitment to creativity, integrity, and craft.
        </StyledParagraph>
      </StyledAbout>
      <StyledCity mask={data.cityMask.publicURL}>
        <Img
          alt="The skyline of Charlotte, NC on a sunny day."
          backgroundColor="#f7f5f6"
          fluid={data.cityImage.childImageSharp.fluid}
          preserveAspectRatio="xMidYMid slice"
        />
      </StyledCity>
    </StyledAboutSection>
  );
};

export default Introduction;

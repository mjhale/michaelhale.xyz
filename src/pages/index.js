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
  const { edges: technologies } = data.allTechnologiesJson;

  return (
    <Layout>
      <StyledHeading>
        Featured <StyledSmallText>Projects</StyledSmallText>
      </StyledHeading>
      <ProjectCard
        description="A progressive advocacy group in the Southeast region, Charlotte Humans sought to create an online presence which focused on efficiently mobilizing supporters to garner interest on key issues of the day."
        image={data.imageCharlotteHumansPreview.childImageSharp.fluid}
        name="Charlotte Humans"
        technologies={technologies}
        technologyTags={['javascript', 'php', 'wordpress']}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    imageCharlotteHumansPreview: file(
      relativePath: { eq: "charlotte-humans/dc-protest.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allTechnologiesJson {
      edges {
        node {
          iconImage {
            publicURL
          }
          name
        }
      }
    }
  }
`;

export default IndexPage;

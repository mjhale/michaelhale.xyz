import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TechnologyIconList from './TechnologyIconList';

const StyledContent = styled.div`
  font-size: 0.9rem;
  height: 100%;
  padding: 1.5rem 1rem 1rem;
  position: relative;
  z-index: 10;
`;

const StyledHeader = styled.h2`
  color: #fff;
  font-size: 1.175rem;
`;

const StyledImage = styled(Img)`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const StyledImageOverlay = styled.div`
  background: linear-gradient(
    to top left,
    hsl(296, 20%, 43%) 7%,
    hsl(296, 20%, 43%) 20%,
    #271329
  );
  bottom: 0;
  left: 0;
  opacity: 0.8;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
`;

const StyledProjectCard = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.04);
  height: 100%;
  max-width: 310px;
  min-height: 275px;
  overflow: hidden;
  position: relative;
  transition-duration: 0.1s;
  transition-property: box-shadow;

  &:hover {
    box-shadow: 0 0 0 1px #31312f, 0 0 1vw #573b61;
  }
`;

const StyledSummary = styled.div`
  color: #fff;
  font-size: 0.845rem;
`;

const StyledIconList = styled.div`
  bottom: 1rem;
  left: 0.7525rem;
  position: absolute;
`;

const ProjectCard = props => {
  const { coverImage, summary, technologies, title } = props;

  return (
    <StyledProjectCard>
      <StyledContent>
        <StyledHeader>{title}</StyledHeader>
        <StyledSummary>{summary}</StyledSummary>
        <StyledIconList>
          <TechnologyIconList technologies={technologies} />
        </StyledIconList>
      </StyledContent>
      <StyledImage
        fluid={coverImage.childImageSharp.fluid}
        style={{ position: 'absolute' }}
      />
      <StyledImageOverlay />
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  coverImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }),
  }).isRequired,
  summary: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default ProjectCard;

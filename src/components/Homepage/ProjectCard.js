import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';
import { media } from 'src/utils/media';

import TechnologyIconList from 'src/components/TechnologyIconList';

const StyledContent = styled.div`
  font-size: 0.9rem;
  height: 100%;
  min-height: 275px;
  padding: 1.5rem 1rem 1rem;
  position: relative;
  z-index: 10;
`;

const StyledHeader = styled.h2`
  color: ${theme.color.white};
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
    ${props =>
      props.isHovered
        ? `${theme.color.core.periwinkle} 10%`
        : `${theme.color.core.periwinkle} 7%`},
    ${props =>
      props.isHovered
        ? `${theme.color.core.periwinkle} 73%`
        : `${theme.color.core.periwinkle} 20%`},
    ${theme.color.accent.mulberry}
  );
  bottom: 0;
  left: 0;
  opacity: ${props => (props.isHovered ? '0.7' : '0.85')};
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
`;

const StyledProjectCard = styled.div`
  border-radius: 4px;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition-duration: 0.1s;
  transition-property: box-shadow;
`;

const StyledSummary = styled.div`
  color: ${theme.color.white};
  font-size: 0.845rem;

  ${media.sm`
    font-size: 0.75rem;
  `};

  ${media.md`
    font-size: 0.845rem;
  `};
`;

const StyledIconList = styled.div`
  bottom: 1rem;
  left: 0.7525rem;
  position: absolute;
`;

const ProjectCard = props => {
  const { coverImage, summary, technologies, title } = props;
  const [isHovered, setHovered] = useState(false);

  return (
    <StyledProjectCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
      <StyledImageOverlay isHovered={isHovered} />
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

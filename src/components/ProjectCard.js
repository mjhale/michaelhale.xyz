import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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
`;

const StyledSummary = styled.div`
  color: #fff;
  font-size: 0.845rem;
`;

const StyledTechnologies = styled.ul`
  bottom: 1rem;
  display: flex;
  height: 40px;
  left: 0.7525rem;
  list-style: none;
  margin: 0;
  position: absolute;
`;

const StyledTechnology = styled.li`
  margin: 0;
`;

const StyledTechnologyImage = styled.img`
  display: block;
  margin: 0;
`;

const ProjectCard = props => {
  const { coverImage, summary, technologies, technologyTags, title } = props;

  return (
    <StyledProjectCard>
      <StyledContent>
        <StyledHeader>{title}</StyledHeader>
        <StyledSummary>{summary}</StyledSummary>
        <StyledTechnologies>
          {technologyTags.map(technologyName => {
            const technology = technologies.find(
              t => t.node.title.toLowerCase() === technologyName.toLowerCase()
            );

            const {
              iconImage: { publicURL: technologyIconImage },
              id: technologyId,
              title: technologyTitle,
            } = technology.node;

            return (
              <StyledTechnology key={technologyId}>
                <StyledTechnologyImage
                  alt={technologyTitle}
                  height="40"
                  src={technologyIconImage}
                  width="40"
                />
              </StyledTechnology>
            );
          })}
        </StyledTechnologies>
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
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        iconImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }).isRequired
  ).isRequired,
  technologyTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;

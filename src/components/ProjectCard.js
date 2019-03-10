import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  font-size: 0.9rem;
  padding: 1.5rem 1rem 1rem;
  position: relative;
  z-index: 10;
`;

const StyledHeader = styled.h2`
  color: #fff;
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
  z-index: 0;
`;

const StyledProjectCard = styled.div`
  background-color: #fff;
  background-image: ${props => `url('${props.image}')` || 'none'};
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.04);
  min-height: 300px;
  max-width: 400px;
  overflow: hidden;
  position: relative;
`;

const StyledSummary = styled.div`
  color: #fff;
`;

const StyledTechnologies = styled.div`
  color: #aab7c4;
  font-size: 15px;
  line-height: 22px;
  margin: 1.5rem 0 0.5rem;
`;

const StyledTechnologyImage = styled.img`
  margin: 0;
`;

const ProjectCard = props => {
  return (
    <StyledProjectCard image={props.image.src}>
      <StyledContent>
        <StyledHeader>{props.name}</StyledHeader>
        <StyledSummary>{props.description}</StyledSummary>
        <StyledTechnologies>
          <>
            {props.technologyTags.map(technologyName => {
              const technology = props.technologies.find(
                t => t.node.name.toLowerCase() === technologyName.toLowerCase()
              );
              const {
                iconImage: { publicURL: imageURL },
                name,
              } = technology.node;

              return (
                <StyledTechnologyImage
                  alt={name}
                  height="30"
                  key={name}
                  src={imageURL}
                  width="30"
                />
              );
            })}
          </>
        </StyledTechnologies>
      </StyledContent>
      <StyledImageOverlay />
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        iconImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }),
        name: PropTypes.string.isRequired,
      }),
    }).isRequired
  ).isRequired,
  technologyTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;

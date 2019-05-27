import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from 'src/utils/theme';

import Link from 'src/components/Link';

const StyledProjectDetails = styled.div`
  min-height: 170px;
  padding: 0.75rem;
`;

const StyledProjectImage = styled(Img)`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const StyledProjectImageOverlay = styled.div`
  background: ${props => props.backgroundColor};
  bottom: 0;
  left: 0;
  opacity: 0.6;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
`;

const StyledProjectImageWrapper = styled.div`
  min-height: 150px;
  position: relative;
`;

const StyledProjectList = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

const StyledProject = styled(Link)`
  background-color: ${theme.color.accent.foggy};
  color: ${theme.color.accent.darkGray};
  display: block;
  text-decoration: none;

  &:hover {
    background-color: ${theme.color.white};
  }
`;

const StyledProjectDescription = styled.div`
  font-size: 0.9rem;
`;

const StyledProjectTitle = styled.div`
  color: ${props => props.textColor};
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const ProjectList = ({ projects }) => {
  return (
    <>
      <h2>Select Projects</h2>
      <StyledProjectList>
        {projects.edges.map(({ node: { frontmatter: column } }, index) => (
          <StyledProject href={column.path} key={index}>
            <StyledProjectImageWrapper>
              <StyledProjectImage
                fluid={column.coverImage.childImageSharp.fluid}
                style={{ position: 'absolute' }}
              />
              <StyledProjectImageOverlay
                backgroundColor={column.style.screenshot_offset}
              />
            </StyledProjectImageWrapper>
            <StyledProjectDetails>
              <StyledProjectTitle textColor={column.style.screenshot_offset}>
                {column.title}
              </StyledProjectTitle>
              <StyledProjectDescription>
                {column.summary}
              </StyledProjectDescription>
            </StyledProjectDetails>
          </StyledProject>
        ))}
      </StyledProjectList>
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default ProjectList;

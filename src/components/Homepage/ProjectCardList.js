import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { media } from 'src/utils/media';

import Heading from 'src/components/Heading';
import HeadingSmalltext from 'src/components/Heading/HeadingSmalltext';
import Link from 'src/components/Link';
import ProjectCard from 'src/components/Homepage/ProjectCard';

const StyledProjectCardList = styled.div`
  display: grid;
  grid-column-gap: 1em;
  margin: 0;

  ${media.sm`
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    grid-row-gap: 0.5rem;
  `}

  ${media.md`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 1rem;
  `}
`;

const StyledProjectLink = styled(Link)`
  display: block;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${media.sm`
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const StyledProjectsSection = styled.section`
  margin: 1.25rem 0;
`;

const ProjectCardList = ({ projects }) => {
  return (
    <StyledProjectsSection>
      <Heading>
        Recent <HeadingSmalltext>Work</HeadingSmalltext>
      </Heading>

      <StyledProjectCardList>
        {projects.edges.map(({ node: { frontmatter: column } }, index) => (
          <StyledProjectLink href={column.path} key={index}>
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
  );
};

ProjectCardList.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default ProjectCardList;

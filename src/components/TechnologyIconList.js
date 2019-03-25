import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledTechnologies = styled.ul`
  display: flex;
  height: 40px;
  list-style: none;
  margin: 0;
`;

const StyledTechnology = styled.li`
  margin: 0;
`;

const StyledTechnologyImage = styled.img`
  display: block;
  margin: 0;
`;

const TechnologyIconList = ({ technologies }) => {
  return (
    <StyledTechnologies>
      {technologies.map(technology => {
        const {
          iconImage: { publicURL: technologyIconImageUrl },
          id: technologyId,
          title: technologyTitle,
        } = technology;

        return (
          <StyledTechnology key={technologyId}>
            <StyledTechnologyImage
              alt={technologyTitle}
              height="40"
              src={technologyIconImageUrl}
              width="40"
            />
          </StyledTechnology>
        );
      })}
    </StyledTechnologies>
  );
};

TechnologyIconList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TechnologyIconList;

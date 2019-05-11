import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSubmissionPopover = styled.section`
  bottom: 0;
  display: ${props =>
    props.submissionStatus === 'success' ? 'block' : 'none'};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const SubmissionPopover = ({ submissionStatus }) => {
  return (
    <StyledSubmissionPopover submissionStatus={submissionStatus}>
      <h2>Thank you!</h2>
      <p>Michael will get back to you as soon as possible.</p>
    </StyledSubmissionPopover>
  );
};

SubmissionPopover.propTypes = {
  submissionStatus: PropTypes.string.isRequired,
};

export default SubmissionPopover;

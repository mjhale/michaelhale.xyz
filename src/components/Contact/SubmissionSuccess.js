import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSubmissionSuccess = styled.section`
  bottom: 0;
  display: ${props =>
    props.formSubmissionStatus === 'success' ? 'block' : 'none'};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const SubmissionSuccess = submissionStatus => {
  return (
    <StyledSubmissionSuccess submissionStatus={submissionStatus}>
      <h2>Thank you!</h2>
      <p>Michael will get back to you as soon as possible.</p>
    </StyledSubmissionSuccess>
  );
};

SubmissionSuccess.propTypes = {
  submissionStatus: PropTypes.string,
};

export default SubmissionSuccess;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Form } from 'formik';

import Input from 'src/components/Input';

const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 1rem;
`;

const ContactForm = ({ errors, isSubmitting, status, touched, values }) => {
  return (
    <Form data-netlify="true" name="contact">
      <Input
        error={touched.name && errors.name}
        id="name"
        label="Name"
        name="name"
        value={values.name}
      />

      <Input
        error={touched.email && errors.email}
        id="email"
        label="Email Address"
        name="email"
        type="email"
        value={values.email}
      />

      <Input
        component="textarea"
        error={touched.message && errors.message}
        id="message"
        label="Message"
        name="message"
        value={values.message}
      />

      {status && status.msg && <div>{status.msg}</div>}

      <StyledSubmitButton type="submit" disabled={isSubmitting}>
        Submit
      </StyledSubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  status: PropTypes.string,
  touched: PropTypes.object,
  values: PropTypes.object,
};

export default ContactForm;

import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';

import encode from 'src/utils/encode';

import ContactForm from 'src/components/Contact/ContactForm';
import Layout from 'src/components/Layout';
import SubmissionPopover from 'src/components/Contact/SubmissionPopover';

const StyledContactWrapper = styled.div`
  position: relative;
`;

const StyledFormSection = styled.section`
  max-height: ${props =>
    props.formSubmissionStatus !== 'success' ? '600px' : '65px'};
  opacity: ${props => (props.formSubmissionStatus !== 'success' ? '1' : '0')};
  transition: max-height 0.3s;
  will-change: max-height;
`;

const validateForm = values => {
  let errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
};

class ContactPage extends React.Component {
  state = {
    formSubmissionStatus: 'pending',
  };

  handleSubmit = (values, { setStatus, setSubmitting }) => {
    fetch('/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        this.setState({
          formSubmissionStatus: 'success',
        });
        setSubmitting(false);
      })
      .catch(error => {
        Sentry.captureException(error);
        setStatus({
          msg: 'Sorry, there was a submission error. Please try again.',
        });
        setSubmitting(false);
      });
  };

  render() {
    const formSubmissionStatus = this.state.formSubmissionStatus;

    return (
      <Layout>
        <Helmet>
          <title>Contact</title>
          <meta
            name="description"
            content="Contact Michael with consulting, employment, and recruiting inquiries at any time."
          />
        </Helmet>
        <h1>Contact Michael</h1>
        <StyledContactWrapper>
          <StyledFormSection formSubmissionStatus={formSubmissionStatus}>
            <p>
              Whether you are interested in working together or just want to say
              hello, fill out the form and Michael will be in touch as soon as
              possible.
            </p>
            <Formik
              initialValues={{
                email: '',
                message: '',
                name: '',
              }}
              validate={validateForm}
              onSubmit={this.handleSubmit}
              render={({ errors, isSubmitting, status, touched, values }) => (
                <ContactForm
                  errors={errors}
                  isSubmitting={isSubmitting}
                  status={status}
                  touched={touched}
                  values={values}
                />
              )}
            />
          </StyledFormSection>
          <SubmissionPopover submissionStatus={formSubmissionStatus} />
        </StyledContactWrapper>
      </Layout>
    );
  }
}

export default ContactPage;

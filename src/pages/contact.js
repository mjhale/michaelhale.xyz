import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import encode from '../utils/encode';

import Input from '../components/Input';
import Layout from '../components/Layout';

const StyledContactContent = styled.div`
  position: relative;
`;

const StyledFormSection = styled.section`
  max-height: ${props =>
    props.formSubmissionStatus !== 'success' ? '600px' : '65px'};
  opacity: ${props => (props.formSubmissionStatus !== 'success' ? '1' : '0')};
  transition: max-height 0.3s;
  will-change: max-height;
`;

const StyledSuccessSection = styled.section`
  bottom: 0;
  display: ${props =>
    props.formSubmissionStatus === 'success' ? 'block' : 'none'};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 1rem;
`;

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
        <h1>Contact Michael</h1>
        <StyledContactContent>
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
              validate={values => {
                let errors = {};

                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.message) {
                  errors.message = 'Required';
                }

                if (!values.name) {
                  errors.name = 'Required';
                }

                return errors;
              }}
              onSubmit={this.handleSubmit}
              render={({ errors, isSubmitting, status, touched, values }) => (
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
              )}
            />
          </StyledFormSection>
          <StyledSuccessSection formSubmissionStatus={formSubmissionStatus}>
            <h2>Thank you!</h2>
            <p>Michael will get back to you as soon as possible.</p>
          </StyledSuccessSection>
        </StyledContactContent>
      </Layout>
    );
  }
}

export default ContactPage;

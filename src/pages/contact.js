import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import encode from '../utils/encode';

import Input from '../components/Input';
import Layout from '../components/Layout';

const StyledSubmitButton = styled.button`
  display: block;
  margin-top: 1rem;
`;

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Contact</h1>
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

            if (!values.name) {
              errors.name = 'Required';
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact', ...values }),
            })
              // TODO: Show status of submission and handle any errors
              .then(() => actions.setSubmitting(false))
              .catch(error => console.log(error));
          }}
          render={({ errors, isSubmitting, status, touched, values }) => (
            <Form data-netlify="true">
              <Input
                error={touched.name && errors.name}
                id="name"
                label="Name"
                value={values.name}
              />

              <Input
                error={touched.email && errors.email}
                id="email"
                label="Email Address"
                type="email"
                value={values.email}
              />

              <Input
                component="textarea"
                id="message"
                label="Message"
                error={touched.message && errors.message}
                value={values.message}
              />

              {status && status.msg && <div>{status.msg}</div>}

              <StyledSubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledSubmitButton>
            </Form>
          )}
        />
      </Layout>
    );
  }
}

export default ContactPage;

import Helmet from 'react-helmet';
import React from 'react';

import Layout from 'src/components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <h1>404 NOT FOUND</h1>
    <p>This page does not exist.</p>
  </Layout>
);

export default NotFoundPage;

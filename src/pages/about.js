import Helmet from 'react-helmet';
import React from 'react';

import Layout from 'src/components/Layout';
import Link from 'src/components/Link';

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About</title>
      <meta
        name="description"
        content="Michael Hale is frontend developer and designer in Charlotte, NC. He works with React, Phoenix, and Rails."
      />
    </Helmet>
    <p>
      Michael currently lives in Charlotte, NC working as a consultant. He
      attended the University of North Carolina at Asheville where he received a
      BA in political science and primarily studied domestic public policy as
      well as computer science.
    </p>
    <p>
      In the past he has worked with Ruby on Rails, Symfony, WordPress, and
      Laravel, but he now spends most of his time with React and Phoenix.
    </p>
    <p>
      For consulting, employment, or recruiting inquires, please e-mail{' '}
      <Link href="mailto:mail@michaelhale.org">mail@michaelhale.org</Link> or
      send a message through the <Link href="/contact/">contact form</Link>.
    </p>
  </Layout>
);

export default AboutPage;

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  text-transform: lowercase;
`;

const SmallText = styled.span`
  font-family: 'Roboto', sans-serif;
`;

const IndexPage = () => (
  <Layout>
    <Heading>Featured <SmallText>Projects</SmallText></Heading>
  </Layout>
);

export default IndexPage;

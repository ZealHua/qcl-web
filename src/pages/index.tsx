// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>QCL Web</title>
        <meta name="description" content="QCL Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Welcome to QCL Web</h1>
        {/* Add more components or content here */}
      </Layout>
    </>
  );
};

export default Home;


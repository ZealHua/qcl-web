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
      <Layout />
    </>
  );
};

export default Home;

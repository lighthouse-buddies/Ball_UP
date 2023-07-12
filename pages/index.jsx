// index.jsx
import Head from 'next/head';
import { getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import { Authentication } from '../src/components/authentication';
import Layout from '../src/components/layout';
import Databaseinfo from '../src/components/databaseinfo';

export default function Home({ feed }) {
  return (
    <div>
      <Layout />
      <Databaseinfo feed={feed} />
      
    </div>
  );
}

export const getStaticProps = async () => {
  // Add any necessary logic to fetch data for the Home page
  // and pass it as props to the Home component
  return {
    props: {
      feed: [], // Add the necessary data here
    },
  };
};

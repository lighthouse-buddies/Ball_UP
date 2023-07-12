// index.jsx
import Head from 'next/head';
import { getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import { Authentication } from '../src/components/authentication';
import Layout from '../src/components/layout';
export default function Home() {
  return (
    <div>
      <Layout />
    </div>
  );
}

import Layout from '../src/components/layout';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About BallUP</title>
        <meta name="description" content="About BallUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Layout
        main={
          <div class="mt-2 ml-2 space-y-1">
            <h1>So, what's all the fuss about this new app on the block?</h1>
            <p>
              BallUp is a place for ballers to add courts.
            </p>
            <p class="text-purple-700 text-opacity-100">
              (scheduling and sharing court location is coming soon!)
            </p>
            <p>
              Every city/suburb/town has those nice courts. The places where
              people need to play some basketball,
            </p>
            <p>
              My vision is to have a place where people can find the best courts
              in their area, and schedule games with their friends.
            </p>
          </div>
        }
      />
    </>
  );
}

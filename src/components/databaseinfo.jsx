import prisma from '../../lib/prisma';

export const getStaticProps = async () => {
  const games = await prisma.games.findMany({
    include: {
      user: true,
      court: true,
    },
  });

  const feed = games.map((game) => ({
    ...game,
    createdAt: game.createdAt.toString(),
    startedAt: game.startedAt.toString(),
    endedAt: game.endedAt.toString(),
    user: {
      ...game.user,
      createdAt: game.user.createdAt.toString(),
      // Convert any other Date fields in the user object
    },
    // apply similar conversion for any other Date objects and nested objects
  }));

  return {
    props: { feed },
  };
};

const Databaseinfo = ({ feed }) => {
  return (
    <div>
      {feed.map((game) => (
        <div key={game.id}>
          <h1>{game.createdAt}</h1>
          <h1>{game.user.name}</h1>
          <h1>{game.court.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default Databaseinfo;

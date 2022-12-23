// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   introspection: true,
//   playground: {
//     settings: {
//       'editor.theme': 'light',
//     },
//     tabs: [
//       {
//         endpoint,
//         query: defaultQuery,
//       },
//     ],
//   },
// });

// const { url } = await startStandaloneServer(server);

// console.log(`🚀 Server ready at ${url}`);


// import { ApolloServer } from '@apollo/server';
// import { typeDefs, resolvers } from './schema';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   introspection: true,
//   playground: true,
// });


// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const { url } = await startStandaloneServer(server);

// console.log(`🚀 Server ready at ${url}`);
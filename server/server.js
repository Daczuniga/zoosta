const express = require('express');
const cwd = process.cwd();
//Line two needs to be defined
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
//const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
// Call the async function to start the server
  startApolloServer();
// const PORT = process.env.PORT || 3001;
// const app = express();
// // Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);
// const activity="zoosta"
// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server for ${activity} running on port ${PORT}!`);
//   });
// });








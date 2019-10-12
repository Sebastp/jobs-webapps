const {ApolloServer} = require("apollo-server-express");
const {typeDefs, resolvers} = require("@src/core/schema");


const { PORT = 8080 } = process.env;


const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:${PORT}/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
});

exports.default apollo

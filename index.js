import { ApolloServer } from 'apollo-server';
import { rootTypeDefs as typeDefs } from './src/graphql/schemas/index.graphql';
import { rootResolvers as resolvers } from './src/graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => console.log(`Running at: ${url}`))
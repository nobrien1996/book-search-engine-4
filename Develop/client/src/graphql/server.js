import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import { typeDefs } from './schemas/index';

const auth = require('./auth');

if (auth == false) {
    console.log('You have failed');
} else {
    console.log('You have succeeded');
};

dotenv.congif();

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});


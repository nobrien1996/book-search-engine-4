import { ApolloServer, gql } from 'apollo-server';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.congif();

const typeDefs = gql`
    type Query {
        me: User
    }
`;

const resolvers = {
    Query: {
        me: (_, _, { user }) => {
            return user;
        }
    }
};

const context = ({ req }) => {
    const token = req.headers.authorization || '';
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return { user };
    } catch (err) {
        return {};
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});


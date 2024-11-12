const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-errors');
const bcrypt = require('bcrypt');
const Mutations = require('./schemas/index');

const secretKey = 'secretKey';

const authMiddlewar = (req) => {
    const token = req.headers.authorization || '';
    if (token) {
        try {
            const cleanToken = token.replace('Bearer ', '');
            const decoded = jwt.verify(cleanToken, secretKey);
            return decoded;
        } catch (err) {
            throw new AuthenticationError('Your attempt was for naught');
        }
    }
    return null;
};

const bcrypt = require('bcrypt');

async function hashPassword() {
   const password = 'secretKey';
   try {
       const hash = await bcrypt.hash(password, 10);
       console.log('Hashed password:', hash);
       const match = await bcrypt.compare(password, hash);
       if (match) {
           console.log('Password is a match');
       } else {
           console.log('Password does not match, auto-destruct in 5 seconds');
       }
   } catch (err) {
       console.error('Error:', err);
   }
}

hashPassword();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const user = authMiddleware(req);
      return { user };
    },
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

module.exports = ({ ApolloServer, gql }, { AuthenticationError}, { jwt }, { Mutations });
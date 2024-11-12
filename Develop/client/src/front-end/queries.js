const ApolloServer = require('apollo-server')

const resolvers = {
    Query: {
        getMe: () => {
            return {
                _id: `${User._id}`,
                username: `${User.username}`,
                bookCount: `${User.bookCount}`,
                savedBooks: `${User.savedBooks}`
            }
        }
    }
};

module.exports = resolvers;
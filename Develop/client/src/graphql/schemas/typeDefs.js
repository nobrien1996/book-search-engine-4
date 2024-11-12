export const typeDefs = `#graphql
    type Book {
        bookId: String!,
        title: String!,
        authors: [String]!,
        description: String!,
        image: String,
        link: String,
    }
    type User {
        _id: ID,
        username: String!,
        email: String!,
        bookCount: String!,
        savedBooks: [Book]
    }
    type Auth {
        token: String!,
        user: [User]!
    }
    type Query {
        me: [User]
    }
    type Mutation {
        login(User.email: String!, User.password: String!): Auth!
        addUser(User.username: String, User.email: String, User.password: String): Auth!,
        saveBook(Book.bookId: String, Book.title: String, Book.authors: [String], Book.description: String, Book.image: String, Book.link: String): User,
        removeBook(Book.bookId: String!): User
    }
`
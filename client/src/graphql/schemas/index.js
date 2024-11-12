class Mutations {


    constructor(endpoint) {
      this.client = new GraphQLClient(endpoint);
    }
  

    async loginUser(email, password) {
      const loginMutation = gql`
        mutation loginUser($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            user {
              username
              email
              password
            }
          }
        }
      `;
  
      const variables = { email, password };
      try {
        const data = await this.client.request(loginMutation, variables);
        console.log('User logged in:', data);
        return data;
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  

    async addNewUser(username, email, password) {
      const addUserMutation = gql`
        mutation addNewUser($username: String!, $email: String!, $password: String!) {
          addUser(username: $username, email: $email, password: $password) {
            token
            user {
              id
              username
              email
            }
          }
        }
      `;
  
      const variables = { username, email, password };
      try {
        const data = await this.client.request(addUserMutation, variables);
        console.log('User added:', data);
        return data;
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  

    async saveNewBook(bookId, title, authors, description, image, link) {
      const saveBookMutation = gql`
        mutation saveNewBook($bookId: String!, $title: String!, $authors: [String!]!, $description: String!, $image: String, $link: String) {
          saveBook(
            bookId: $bookId,
            title: $title,
            authors: $authors,
            description: $description,
            image: $image,
            link: $link
          ) {
            id
            username
            email
            books {
              bookId
              title
            }
          }
        }
      `;
  
      const variables = { bookId, title, authors, description, image, link };
      try {
        const data = await this.client.request(saveBookMutation, variables);
        console.log('Book saved:', data);
        return data;
      } catch (error) {
        console.error('Error saving book:', error);
      }
    }
  

    async removeBookFromLibrary(bookId) {
      const removeBookMutation = gql`
        mutation removeBookFromLibrary($bookId: String!) {
          removeBook(bookId: $bookId) {
            id
            username
            email
            books {
              bookId
              title
            }
          }
        }
      `;
  
      const variables = { bookId };
      try {
        const data = await this.client.request(removeBookMutation, variables);
        console.log('Book removed:', data);
        return data;
      } catch (error) {
        console.error('Error removing book:', error);
      }
    }
  };

module.exports = Mutations
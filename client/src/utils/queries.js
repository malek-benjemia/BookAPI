import gql from 'graphql-tag';

export const QUERY_GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks{
        authors
        description
        title
        link 
        image
        bookId
      }
    }
  }
`;
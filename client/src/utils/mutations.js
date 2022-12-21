// saved books login remove user
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login($email: String!, $password: String!){
            token
            user{
                _id
                username
            }
        }
    }
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
        addUser($username: String!, $email: String!, $password: String!){
            token
            user{
                _id
                username
            }
        }
    }`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String) {
    saveBook(input: {authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image}) {
      savedBooks {
        bookId
        authors
        title
        description
        image
      }
    }
  }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removeBook($bookId: $bookId){
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                link
                title
            } 
        }
    }
`;

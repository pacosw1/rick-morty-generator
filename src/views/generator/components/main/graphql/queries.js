const { gql } = require("@apollo/client");

const GET_CHARACTER = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      name
      id
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;

const GET_CHAR_COUNT = gql`
  query {
    characters {
      info {
        pages
        count
      }
    }
  }
`;

export { GET_CHARACTER, GET_CHAR_COUNT };

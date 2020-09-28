import { gql } from "@apollo/client";

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

export { GET_CHAR_COUNT };

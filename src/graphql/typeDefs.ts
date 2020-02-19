import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Listing {
    id: ID!
    name: String!
  }

  type Query {
    listings: Listing!
  }

  type Mutation {
    deleteListing(id: ID): Listing!
  }
`;

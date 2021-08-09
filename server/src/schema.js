const { gql } = require("apollo-server");

const typeDefs = gql`
  "A track is group of modules that teaches about a specific topic"
  type Track {
    id: Id!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
`;

module.export = typeDefs;

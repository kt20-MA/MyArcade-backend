import { buildSchema } from 'graphql';

const schema = buildSchema(`
type User {
  userID: String!
  firstName: String!
  lastName: String!
  photo: String
  bio: String
  verified: Boolean
  email: String!
  password: String!

}
input UserInput {
  firstName: String!
  lastName: String!
  photo: String
  bio: String
  email: String!
  password: String!
}

type RootQuery {
  login(email: String!): User
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation:RootMutation
}
`);

module.exports = schema;

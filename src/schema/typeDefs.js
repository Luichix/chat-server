const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    uid: ID!
    name: String
    avatar: String
  }
  type Message {
    id: ID!
    text: String!
    createdAt: String!
    user: User!
  }
  type Query {
    allMessages: [Message]!
  }
  type Mutation {
    addMessage(text: String!, uid: ID!): Message
  }
  type Subscription {
    messageAdded: Message!
  }
`

module.exports = { typeDefs }

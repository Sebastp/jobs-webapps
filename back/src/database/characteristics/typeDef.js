import { gql } from 'apollo-server-express'


const typeDefs = gql`
  extend type Query {
    characteristics: [Characteristics]
  }

  type Characteristics {
    title: String
    description: String
  }
`

export default typeDefs

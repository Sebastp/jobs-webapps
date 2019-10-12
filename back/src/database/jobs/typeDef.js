import { gql } from 'apollo-server-express'


const typeDefs = gql`
  extend type Query {
    jobs: String
  }

  type Job {
    uid: String
  }
`

export default typeDefs

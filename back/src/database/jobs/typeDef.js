import { gql } from 'apollo-server-express'


const typeDefs = gql`
  extend type Query {
    jobs: [Job]
  }

  type Job {
    title: String
    description: String
    similarJobs: String
  }
`

export default typeDefs

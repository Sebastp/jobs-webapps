import gql from 'graphql-tag'

export const getJobs = gql`
  query{
    jobs {
      title
      description
      similarJobs
    }
  }
`

import gql from 'graphql'

export const getJobs = gql`
  query{
    jobs {
      title
      description
      similarJobs
    }
  }
`
